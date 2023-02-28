import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav/MainNav.component";
import CollapsedNav from "./CollapsedNav/CollapsedNav.component";
import Logo from "../../Components/Logo/Logo.component";
import SearchBox from "../../Components/SearchBox/SearchBox.component";

import "./Navbar.styles.css";

const Navbar = () => {
    return (
        <header>
            <div className="container">

                <div className="logo-container">
                    <Logo/>
                    <ul className="contact-info">
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="icon" /> 07446 258 822
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" /> rrsportsmassage@outlook.com
                        </li>

                        <SearchBox/>
                    </ul>
                </div>

                <div className="collapsible-nav">
                    <MainNav/>
                    <CollapsedNav/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;