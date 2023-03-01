import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav/MainNav.component";
import CollapsedNav from "./CollapsedNav/CollapsedNav.component";
import Logo from "../../Components/Logo/Logo.component";
import SearchBox from "../../Components/SearchBox/SearchBox.component";

import "./Navbar.styles.css";
import {useEffect} from "react";

const Navbar = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const header = document.querySelector("header");
            const h1 = document.querySelector("h1");
            const yPosition = h1 ? 320 : 200;

            if (window.scrollY > yPosition) {
                header.classList.add("shrink");
            } else {
                header.classList.remove("shrink");
            }
        });
    }, []);

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