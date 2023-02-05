import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <Logo/>

            <ul>
                <li>
                    <a href="https://www.facebook.com/rrsportsmassage.co.uk" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon"/>
                    </a>
                </li>
                <li><a href="" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="icon"/>
                </a></li>
            </ul>

            <ul>
                <li><a href="">Home</a></li>
                <li><a className="contact-button">Contact</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">Privacy</a></li>
            </ul>
            <p className="copyright">© Ryan Henzell-Hill</p>
        </footer>
    );
};

export default Footer;