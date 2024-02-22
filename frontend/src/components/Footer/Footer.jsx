import Logo from "../Logo/Logo";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from '@fortawesome/free-solid-svg-icons'

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
                <div className="social-icons">
                    <a href="">
                        <img src="./src/entities/photo/favicon.ico" alt="" width={20} height={20} />
                    </a>
                        {/* <a href="#" class="icon"><FontAwesomeIcon icon={faHouse} /></a>
                        <a href="#" class="icon"><FontAwesomeIcon icon="fa-brands fa-telegram" /></a>
                        <a href="#" class="icon"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a href="#" class="icon"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>            */}
                    </div>
            </div>
        </footer>
    );
}

export default Footer;