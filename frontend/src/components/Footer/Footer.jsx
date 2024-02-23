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