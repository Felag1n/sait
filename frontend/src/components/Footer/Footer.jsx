import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from './Footer.module.css';

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
                <button
                    className={styles.logo}
                    onClick={scrollToTop} 
                >
                    <Logo />
                </button>

                <nav className={styles.navigation}>
                    <Link to="/about" className={`inter ${styles['navigation-item']}`}>О нас</Link>
                    <Link to="/Uslugi" className={`inter ${styles['navigation-item']}`}>Услуги</Link>
                    <Link to="/contacts" className={`inter ${styles['navigation-item']}`}>Контакты</Link>
                </nav>

                <div className={styles['button-group']}>
                    <Link className="button button-inline" to="/suport">Поддержка</Link>
                    <Link className="button" to="/FAQ">FAQ</Link>
                </div>
                <div className="social-icons">
                    <a href="">
                        <img src="./src/public/discord.svg" alt="" width={20} height={20} />
                    </a>
                    <a href="">
                        <img src="./src/public/vk.svg" alt="" width={20} height={20} />
                    </a>
                    <a href="">
                        <img src="./src/public/telegram.svg" alt="" width={20} height={20} />
                    </a>
                    <a href="">
                        <img src="./src/public/instagram.svg" alt="" width={20} height={20} />
                    </a>
                        
                        
                    </div>
            </div>
        </footer>
    );
}

export default Footer;