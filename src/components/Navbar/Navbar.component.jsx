import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav/MainNav.component";
import CollapsedNav from "./CollapsedNav/CollapsedNav.component";
import Logo from "../../Logo/Logo.component";

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
                        <li className="search-container">
                            <div className="search-box">
                                <input id="search-field" type="search" placeholder="Search..."/>
                                <button id="search-button">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                                </button>
                            </div>
                            <ul id="search-results-container" className="search-results-dropdown"></ul>
                        </li>
                    </ul>
                </div>

                <div className="collapse-nav">
                    <MainNav/>
                    <CollapsedNav/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;