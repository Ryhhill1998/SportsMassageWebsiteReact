import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo/Logo.component";

import "./Footer.styles.css";
import {Link, NavLink} from "react-router-dom";
const Footer = () => {

    const pageTopClickHandler = ({target}) => {
        if (target.innerHTML === "Home") return;
        window.scrollTo(0, 0);
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
                    <NavLink to={"/"} onClick={pageTopClickHandler}>
                        {({ isActive }) => isActive ? "Page top" : "Home"}
                    </NavLink>
                </li>
                <li><a className="contact-button">Contact</a></li>
                <li><Link to={"/"}>Cookies</Link></li>
                <li><Link to={"/"}>Privacy</Link></li>
            </ul>
            <p className="copyright">© Ryan Henzell-Hill</p>
        </footer>
    );
};

export default Footer;