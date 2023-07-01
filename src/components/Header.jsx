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
                        <i className="fa-solid fa-house"></i>
                        <Link to='{/home}' className={styles.firstNavLink}>Accueil</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-truck-pickup"></i>
                        <Link to='{/}'>Safaris</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-paw"></i>
                        <Link to='{/}'>Faune</Link>
                    </li>
                    <li>
                        <i className="fa-regular fa-images"></i>
                        <Link to='{/}'>Galerie</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <Link to='{/}'>Contact</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <Link to='{/}'>Connexion</Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;