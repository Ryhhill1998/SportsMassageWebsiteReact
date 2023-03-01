import {Link, NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";

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
                <li><Link to={`/`} onClick={hideServices}>Home</Link></li>
                <li className="services">
                    <a className="dropdown-button" id="services-button" onClick={toggleServices}>
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </a>
                    <div id="services-dropdown" className="no-display">
                        <ul>
                            <li>
                                <NavLink
                                    to={`/sports-massage`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Sports Massage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/reflexology`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Reflexology
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/swedish-massage`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Swedish Massage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/indian-head-massage`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Indian Head Massage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/la-stone-therapy`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    LA Stone Therapy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/acupuncture`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Acupuncture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/corporate-pamper-days`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Corporate Pamper Days
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/peer-to-peer-massage`}
                                    className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                                    onClick={hideServices}>
                                    Peer-to-Peer Massage
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><Link to={""}>FAQs</Link></li>
                <li><a href="#section--testimonials">Testimonials</a></li>
                <li><Link to={""} className="contact-button">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;