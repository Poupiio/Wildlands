import styles from '../modules/Header.module.css';
import logo from '../images/1.png';

const Header = () => {
    return (
        <header>
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li>
                        <img src={logo} alt="" className={styles.image} />
                    </li>
                    <li>Accueil</li>
                    <li>Safaris</li>
                    <li>Faune</li>
                    <li>Connexion</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;