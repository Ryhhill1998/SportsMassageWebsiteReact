import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link, NavLink} from "react-router-dom";
import {useEffect} from "react";

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
                    <li><Link to={"/"} onClick={hideDropdown}>Home</Link></li>
                    <li>
                        <NavLink
                            to={"/sports-massage"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Sports Massage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/reflexology"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Reflexology
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/swedish-massage"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Swedish Massage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/indian-head-massage"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Indian Head Massage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/la-stone-therapy"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            LA Stone Therapy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/acupuncture"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Acupuncture
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/corporate-pamper-days"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Corporate Pamper Days
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/peer-to-peer-massage"}
                            className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                            onClick={hideDropdown}>
                            Peer-to-Peer Massage
                        </NavLink>
                    </li>
                    <li><Link to={"/"}>FAQs</Link></li>
                    <li><Link to={"/"}>Testimonials</Link></li>
                    <li><Link to={"/"} className="contact-button">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;