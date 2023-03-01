import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link, NavLink} from "react-router-dom";
import {navigationLinks} from "../MainNav/MainNav.component";
import NavigationLink from "../NavigationLink/NavigationLink.component";

const CollapsedNav = () => {

    const toggleDropdown = () => {
        document.getElementById("dropdown-menu").classList.toggle("no-display");
    }

    const hideDropdown = () => {
        document.getElementById("dropdown-menu").classList.add("no-display");
    }

    return (
        <>
            <nav className="collapsed-nav">
                <ul>
                    <li className="dropdown-button" id="hamburger" onClick={toggleDropdown}>
                        Menu <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </li>
                </ul>
            </nav>
            <div id="dropdown-menu" className="collapsed-nav-dropdown no-display">
                <ul>
                    <NavigationLink text="Home" route="/" onClickHandler={hideDropdown} />
                    {navigationLinks.map((navLink, i) => (
                        <NavigationLink key={i} {...navLink} onClickHandler={hideDropdown} />
                    ))}

                    <li><Link to={"/"}>FAQs</Link></li>
                    <li><Link to={"/"}>Testimonials</Link></li>
                    <li><Link to={"/"} className="contact-button">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;