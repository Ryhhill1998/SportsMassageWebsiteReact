import logo from "../images/logo-with-text.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav";
import CollapsedNav from "./CollapsedNav";

const Navbar = () => {
    return (
        <header>
            <div className="container">

                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                    <ul className="contact-info">
                        <li>07446 258 822</li>
                        <li>rrsportsmassage@outlook.com</li>
                        <li className="search-container">
                            <div className="search-box">
                                <input id="search-field" type="search" placeholder="Search..."/>
                                <button id="search-button">Go</button>
                            </div>
                            <ul id="search-results-container" className="search-results-dropdown"></ul>
                        </li>
                    </ul>
                </div>

                <div className="collapsable-nav">
                    <MainNav/>
                    <CollapsedNav/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;