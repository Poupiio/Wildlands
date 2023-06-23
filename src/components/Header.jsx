import { Link } from 'react-router-dom';
import styles from '../modules/Header.module.css';
import logo from '../images/1.png';

const Header = () => {
    return (
        <header>
            <div className={styles.logoContainer}>
                <Link to='{/}'>
                    <img src={logo} alt="Logo Wildlands" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='{/home}' className={styles.firstNavLink}>Accueil</Link>
                    </li>
                    <li>
                        <Link to='{/}'>Safaris</Link>
                    </li>
                    <li>
                        <Link to='{/}'>Faune</Link>
                    </li>
                    <li>
                        <Link to='{/}'>Connexion</Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;