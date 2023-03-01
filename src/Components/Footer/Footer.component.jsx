import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo/Logo.component";

import "./Footer.styles.css";
const Footer = () => {
    return (
        <footer>
            <Logo/>

            <ul>
                <li>
                    <a href="https://www.facebook.com/rrsportsmassage.co.uk" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon"/>
                    </a>
                </li>
                <li><a href="src/components" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="icon"/>
                </a></li>
            </ul>

            <ul>
                <li><a href="src/components">Home</a></li>
                <li><a className="contact-button">Contact</a></li>
                <li><a href="src/components">Cookies</a></li>
                <li><a href="src/components">Privacy</a></li>
            </ul>
            <p className="copyright">© Ryan Henzell-Hill</p>
        </footer>
    );
};

export default Footer;