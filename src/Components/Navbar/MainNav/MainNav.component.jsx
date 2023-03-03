import {Link, NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";
import NavigationLink from "../NavigationLink/NavigationLink.component";

export const navigationLinks = [
    {
        text: "Sports Massage",
        route: "/sports-massage"
    },
    {
        text: "Reflexology",
        route: "/reflexology"
    },
    {
        text: "Swedish Massage",
        route: "/swedish-massage"
    },
    {
        text: "Indian Head Massage",
        route: "/indian-head-massage"
    },
    {
        text: "LA Stone Therapy",
        route: "/la-stone-therapy"
    },
    {
        text: "Acupuncture",
        route: "/acupuncture"
    },
    {
        text: "Corporate Pamper Days",
        route: "/corporate-pamper-days"
    },
    {
        text: "Peer-to-Peer Massage",
        route: "/peer-to-peer"
    }
]

const MainNav = () => {

    const hideServices = () => {
        document.getElementById("services-dropdown").classList.add("no-display");
    }

    const toggleServices = () => {
        document.getElementById("services-dropdown").classList.toggle("no-display");
    }

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink
                        to={`/`}
                        className={({isActive}) => isActive ? "active" : ""}
                        onClick={hideServices}>
                        Home
                    </NavLink>
                </li>
                <li className="services">
                    <a className="dropdown-button" id="services-button" onClick={toggleServices}>
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </a>
                    <div id="services-dropdown" className="no-display">
                        <ul>
                            {navigationLinks.map((navLink, i) => (
                                <NavigationLink key={i} {...navLink} onClickHandler={hideServices} />
                            ))}
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink
                        to={`/faqs`}
                        className={({isActive}) => isActive ? "active" : ""}
                        onClick={hideServices}>
                        FAQs
                    </NavLink>
                </li>
                <li><a href="#section--testimonials" onClick={hideServices}>Testimonials</a></li>
                <li><Link to={""} onClick={hideServices} className="contact-button">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;