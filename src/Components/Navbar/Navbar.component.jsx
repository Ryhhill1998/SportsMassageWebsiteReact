import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav/MainNav.component";
import CollapsedNav from "./CollapsedNav/CollapsedNav.component";
import Logo from "../../Components/Logo/Logo.component";
import SearchBox from "../../Components/SearchBox/SearchBox.component";

import "./Navbar.styles.css";
import {useEffect, useState} from "react";
import {DropdownSearchProvider} from "../../Contexts/DropdownSearch.context";

const Navbar = () => {

    const [navIsShrunk, setNavIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const h1 = document.querySelector("h1");
            const yPosition = h1 ? 300 : 150;

            if (!navIsShrunk && window.scrollY > yPosition) {
                setNavIsShrunk(true);
            } else if (navIsShrunk && window.scrollY === 0) {
                setNavIsShrunk(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navIsShrunk]);

    return (
        <header className={`${navIsShrunk ? "shrink" : ""}`}>
            <div className="navbar-container">

                <div className={`logo-container`}>
                    <Logo/>
                    <ul className="contact-info">
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="icon"/> 07446 258 822
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/> rrsportsmassage@outlook.com
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