import Logo from "../Logo/Logo"
import styles from "../Footer/"
function Footer(){  
    return (
        <footer className={styles.footer}>
          <div className={styles['footer-container']}>
            <ul className={styles['footer-links']}>
              <li><a href="#">Музыка</a></li>
              <li><a href="#">Чарты</a></li>
              <li><a href="#">Избранное</a></li>
            </ul>
          </div>
        </footer>
      );
    };
export default Footer