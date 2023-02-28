import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";

const MainNav = () => {

    const toggleServices = () => {
        document.getElementById("services-dropdown").classList.toggle("no-display");
    }

    const showServices = () => {
        document.getElementById("services-dropdown").classList.remove("no-display");
    }

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li className="services" onMouseLeave={toggleServices}>
                    <Link to={""} className="dropdown-button" id="services-button" onClick={toggleServices}
                       onMouseEnter={showServices}>
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </Link>
                    <div id="services-dropdown" className="no-display">
                        <ul>
                            <li><Link to={`/sports-massage`} href="src/components">Sports Massage</Link></li>
                            <li><Link to={`/reflexology`} href="src/components">Reflexology</Link></li>
                            <li><Link to={`/swedish-massage`} href="src/components">Swedish Massage</Link></li>
                            <li><Link to={`/indian-head-massage`} href="src/components">Indian Head Massage</Link></li>
                            <li><Link to={`/la-stone-therapy`} href="src/components">LA Stone Therapy</Link></li>
                            <li><Link to={`/corporate-pamper-days`} href="src/components">Corporate Pamper Days</Link></li>
                            <li><Link to={`/peer-to-peer`} href="src/components">Peer-to-Peer Massage</Link></li>
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