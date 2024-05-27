import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faVk, faTelegram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-container']}>
                <button className={styles.logo} onClick={scrollToTop}>
                    <Logo />
                </button>

                <nav className={styles.navigation}>
                    <Link to="/about" className={`inter ${styles['navigation-item']}`}>О нас</Link>
                    <Link to="/contacts" className={`inter ${styles['navigation-item']}`}>Контакты</Link>
                </nav>

                <div className={styles['button-group']}>
                    <Link className="button button-inline" style={{ textDecoration: 'none' }} to="https://www.donationalerts.com/r/felagin">Поддержка</Link>
                    <Link className="button" style={{ textDecoration: 'none' }} to="/FAQ">FAQ</Link>
                </div>

                <div className={styles['social-icons']}>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                    <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faVk} size="lg" />
                    </a>
                    <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} size="lg" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
