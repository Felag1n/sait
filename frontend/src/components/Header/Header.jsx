import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Header.module.css';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    const username = localStorage.getItem('username');

    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <SearchBar />

                <Link to="/" className={styles.logo}>
                    <Logo />
                </Link>

                <nav className={styles.navigation}>
                    <Link to="/Music" className={`inter ${styles['navigation-item']}`}>Музыка</Link>
                    <Link to="/charts" className={`inter ${styles['navigation-item']}`}>Чарты</Link>
                    <Link to="/Izbranoe" className={`inter ${styles['navigation-item']}`}>Избранное</Link>
                </nav>

                <div className={styles['button-group']}>
                    {username
                        ? (
                            <>
                                <span>{username}</span>
                                <Button onClick={handleLogout} className={`inter ${styles['navigation-item']}`} style={{ transform: 'none' }} variant="flat" size="xxl">
                                    Выйти
                                </Button>
                            </>
                        )
                        : (
                            <>
                                <Button className={`inter ${styles['navigation-item']}`} style={{ transform: 'none' }} variant="flat" as={Link} to="/login" size="xxl">
                                    Вход
                                </Button>
                                <Button className={`inter ${styles['navigation-item']}`} style={{ transform: 'none' }} variant="flat" as={Link} to="/register" size="xxl">
                                    Регистрация
                                </Button>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
