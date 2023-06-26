import { Link } from "react-router-dom";
import style from '../modules/Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <ul className={style.footerMenu}>
                <li>
                    <Link to={'/legalmentions'}>Mentions Légales</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contactez-nous</Link>
                </li>
                <li>
                    <Link to={'/feedback'}>Les avis de nos aventuriers</Link>
                </li>
                <li>
                    <a href="https://www.tiktok.com/fr/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
            </ul>
            <p>Copyright ©2023 Wildlands. All rights reserved</p>
        </footer>
    )
};


export default Footer;