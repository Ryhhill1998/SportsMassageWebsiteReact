import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link} from "react-router-dom";

const CollapsedNav = () => {
    const toggleDropdown = () => {
        document.getElementById("dropdown-menu").classList.toggle("no-display");
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
                    <li><Link to={"/"} className="dropdown-selected">Home</Link></li>
                    <li><Link to={"/sports-massage"}>Sports Massage</Link></li>
                    <li><Link to={"/reflexology"}>Reflexology</Link></li>
                    <li><Link to={"/swedish-massage"}>Swedish Massage</Link></li>
                    <li><Link to={"/indian-head-massage"}>Indian Head Massage</Link></li>
                    <li><Link to={"/la-stone-therapy"}>LA Stone Therapy</Link></li>
                    <li><Link to={"/corporate-pamper-days"}>Corporate Pamper Days</Link></li>
                    <li><Link to={"/peer-to-peer"}>Peer-to-Peer Massage</Link></li>
                    <li><Link to={"/"}>FAQs</Link></li>
                    <li><Link to={"/"}>Testimonials</Link></li>
                    <li><Link to={"/"} className="contact-button">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;