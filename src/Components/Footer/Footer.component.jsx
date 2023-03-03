import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo/Logo.component";

import "./Footer.styles.css";
import {Link, NavLink} from "react-router-dom";
import useScrollToTop from "../../Hooks/useScrollToTop";
import {ContactFormContext} from "../../Contexts/ContactForm.context";
import {useContext} from "react";

const Footer = () => {

    const {setContactFormOpen} = useContext(ContactFormContext);

    const handleContactClicked = () => {
        setContactFormOpen(true);
    }

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
                <li>
                    <NavLink to={"/"} onClick={useScrollToTop}>
                        {({ isActive }) => isActive ? "Page top" : "Home"}
                    </NavLink>
                </li>
                <li><Link to={""} className="contact-button" onClick={handleContactClicked}>Contact</Link></li>
                <li><Link to={"/"}>Cookies</Link></li>
                <li><Link to={"/"}>Privacy</Link></li>
            </ul>
            <p className="copyright">© Ryan Henzell-Hill</p>
        </footer>
    );
};

export default Footer;