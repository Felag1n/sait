import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    // Function to sanitize input
    const sanitizeInput = (input) => {
        const pattern = /[<>;"]/g; // Remove only potentially dangerous characters
        return input.replace(pattern, '');
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            const sanitizedQuery = sanitizeInput(query);
            if (sanitizedQuery.trim() !== '') {
                setLoading(true);
                setError(null);
                axios.get(`http://localhost:1337/api/songs?filters[name][$contains]=${sanitizedQuery}&populate=*&pagination[pageSize]=100000000`)
                    .then(response => {
                        setResults(response.data.data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Ошибка при получении результатов поиска:', error);
                        setError('Ошибка при получении результатов поиска');
                        setLoading(false);
                        setResults([]);
                        setFilteredResults([]);
                    });
            } else {
                setResults([]);
                setFilteredResults([]);
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        const sanitizedQuery = sanitizeInput(query);
        if (sanitizedQuery.length === 1) {
            const firstLetterMatch = results.filter(result => {
                const name = result.attributes.Name.toLowerCase();
                return name.startsWith(sanitizedQuery.toLowerCase()) || name.split('-').some(part => part.startsWith(sanitizedQuery.toLowerCase()));
            });
            setFilteredResults(firstLetterMatch);
        } else {
            setFilteredResults(results.filter(result => result.attributes.Name.toLowerCase().includes(sanitizedQuery.toLowerCase())));
        }
    }, [results, query]);

    const handleResultClick = (id) => {
        navigate(`/song/${id}`);
        setQuery('');
        setResults([]);
        setFilteredResults([]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % filteredResults.length);
        } else if (event.key === 'ArrowUp') {
            setActiveIndex((prevIndex) => (prevIndex - 1 + filteredResults.length) % filteredResults.length);
        } else if (event.key === 'Enter' && activeIndex >= 0) {
            handleResultClick(filteredResults[activeIndex].id);
        }
    };

    const handleClickOutside = (event) => {
        if (resultsRef.current && !resultsRef.current.contains(event.target) && !inputRef.current.contains(event.target)) {
            setFilteredResults([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const highlightMatch = (text, query) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? <span key={index} className={styles.highlight}>{part}</span> : part
        );
    };

    return (
        <div className={styles['input-wrapper']}>
            <button className={styles.icon}>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M22 22L20 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
            <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                type="search"
                name="search"
                className={styles.input}
                placeholder="Поиск..."
            />
            {loading && <div>Загрузка...</div>}
            {error && <div className={styles.error}>{error}</div>}
            {filteredResults.length > 0 && (
                <ul className={styles['results-list']} ref={resultsRef}>
                    {filteredResults.map((result, index) => (
                        <li
                            key={result.id}
                            className={index === activeIndex ? styles.active : ''}
                            onMouseDown={() => handleResultClick(result.id)}
                        >
                            {highlightMatch(result.attributes.Name, query)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;





