import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <SearchBar />

                <button
                    className={styles.logo}
                    onClick={() => location.reload()}
                >
                    <Logo />
                </button>

                <nav className={styles.navigation}>
                    <a href="" className={`inter ${styles['navigation-item']}`}>Музыка</a>
                    <a href="" className={`inter ${styles['navigation-item']}`}>Чарты</a>
                    <a href="" className={`inter ${styles['navigation-item']}`}>Избранное</a>
                </nav>

                <div className={styles['button-group']}>
                    <a className="button button-inline" href="">Вход</a>
                    <a className="button" href="">Регистрация</a>
                </div>
            </div>
        </header>
    )
}

export default Header
