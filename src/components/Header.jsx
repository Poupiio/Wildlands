import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../modules/Header.module.css';

const Header = () => {
    return (
        <header>
            <Nav className={style.navBar}>
                <Container>
                    <Nav className="me-auto justify-content-around">
                        <Nav.Link className={style.navLink} href="#home">Accueil</Nav.Link>
                        <Nav.Link className={style.navLink} href="#home">Safaris</Nav.Link>
                        <Nav.Link className={style.navLink} href="#features">Faune et Flore</Nav.Link>
                        <Nav.Link className={style.navLink} href="#pricing">Galerie</Nav.Link>
                        <Nav.Link className={style.navLink} href="#pricing">Connexion</Nav.Link>
                    </Nav>
                </Container>
            </Nav>
            {/* <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Safaris</li>
                    <li>Faune et Flore</li>
                    <li>Galerie</li>
                    <li>Connexion</li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header;