import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="src/components#top">Home</a></li>
                <li className="services">
                    <a className="dropdown-button" id="services-button">
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </a>
                    <div id="services-dropdown" className="no-display">
                        <ul>
                            <li><a href="src/components">Sports Massage</a></li>
                            <li><a href="src/components">Reflexology</a></li>
                            <li><a href="src/components">Swedish Massage</a></li>
                            <li><a href="src/components">Indian Head Massage</a></li>
                            <li><a href="src/components">LA Stone Therapy</a></li>
                            <li><a href="src/components">Corporate Pamper Days</a></li>
                            <li><a href="src/components">Peer-to-Peer Massage</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="src/components">FAQs</a></li>
                <li><a href="src/components#section--testimonials">Testimonials</a></li>
                <li><a href="src/components#top" className="contact-button">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MainNav;