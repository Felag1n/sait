import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <SearchBar />

                <Link to="/"
                    className={styles.logo}
                    
                >
                    <Logo />
                </Link>

                <nav className={styles.navigation}>
                    <Link to="" className={`inter ${styles['navigation-item']}`}>Музыка</Link>
                    <Link  to="/charts" className={`inter ${styles['navigation-item']}`}>Чарты</Link>
                    <Link  to="/Izbranoe" className={`inter ${styles['navigation-item']}`}>Избранное</Link>
                </nav>

                <div className={styles['button-group']}>
                    <Link  to="button button-inline" href="input.html">Вход</Link>
                    <Link  to="button" href="">Регистрация</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
