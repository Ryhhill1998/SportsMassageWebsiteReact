import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import MainNav from "./MainNav/MainNav.component";
import CollapsedNav from "./CollapsedNav/CollapsedNav.component";
import Logo from "../../Components/Logo/Logo.component";
import SearchBox from "../../Components/SearchBox/SearchBox.component";

import "./Navbar.styles.css";
import {useEffect, useState} from "react";

const Navbar = () => {

    const [navIsShrunk, setNavIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setNavIsShrunk(true);
            } else if (window.scrollY === 0) {
                setNavIsShrunk(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <div className="navbar-container">

                {!navIsShrunk && <div className="logo-container">
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
                </div>}

                <div className="collapsible-nav">
                    <MainNav/>
                    <CollapsedNav/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;