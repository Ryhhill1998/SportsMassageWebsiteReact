import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";

const CollapsedNav = () => {
    return (
        <>
            <nav className="collapsed-nav">
                <ul>
                    <li className="dropdown-button" id="hamburger">
                        Menu <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow" />
                    </li>
                </ul>
            </nav>
            <div id="dropdown-menu" className="collapsed-nav-dropdown no-display">
                <ul>
                    <li><a className="dropdown-selected" href="Navigation/CollapsedNav">Home</a></li>
                    <li><a href="src/components">Sports Massage</a></li>
                    <li><a href="src/components">Reflexology</a></li>
                    <li><a href="src/components">Swedish Massage</a></li>
                    <li><a href="src/components">Indian Head Massage</a></li>
                    <li><a href="src/components">LA Stone Therapy</a></li>
                    <li><a href="src/components">Corporate Pamper Days</a></li>
                    <li><a href="src/components">Peer-to-Peer Massage</a></li>
                    <li><a href="src/components">FAQs</a></li>
                    <li><a href="src/components#section--testimonials">Testimonials</a></li>
                    <li><a href="src/components#top" className="contact-button">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;