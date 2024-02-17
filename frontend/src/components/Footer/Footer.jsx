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
                    <a href="" className={`inter ${styles['navigation-item']}`}>О нас</a>
                    <a href="" className={`inter ${styles['navigation-item']}`}>Услуги</a>
                    <a href="" className={`inter ${styles['navigation-item']}`}>Контакты</a>
                </nav>

                <div className={styles['button-group']}>
                    <a className="button button-inline" href="">Поддержка</a>
                    <a className="button" href="">FAQ</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;