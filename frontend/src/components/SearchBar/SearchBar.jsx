import { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const onInputHandler = props.onInput || (() => {})
    const [query, setQuery] = useState('')

    useEffect(() => {
        onInputHandler(query)
    }, [query])

    return (
        <div className={styles['input-wrapper']}>
            <button
                className={styles.icon}
            >
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M22 22L20 20"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>
            <input
                onInput={(event) => {
                    setQuery(event.target.value)
                }}
                type="search"
                name="search"
                className={styles.input}
                placeholder="search.."
            />
        </div>
    )
}

export default SearchBar
