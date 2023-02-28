import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";

const MainNav = () => {

    const showActiveLink = ({target}) => {
        const allLinks = document.querySelectorAll("#services-dropdown a");

        allLinks.forEach(link => {
            link.classList.remove("dropdown-selected");
        });

        target.classList.add("dropdown-selected");

        toggleServices();
    }

    const toggleServices = () => {
        document.getElementById("services-dropdown").classList.toggle("no-display");
    }

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li className="services">
                    <a className="dropdown-button" id="services-button" onClick={toggleServices}>
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </a>
                    <div id="services-dropdown" className="no-display">
                        <ul>
                            <li>
                                <Link
                                    to={`/sports-massage`}
                                    onClick={showActiveLink}>
                                    Sports Massage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/reflexology`}
                                    onClick={showActiveLink}>
                                    Reflexology
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/swedish-massage`}
                                    onClick={showActiveLink}>
                                    Swedish Massage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/indian-head-massage`}
                                    onClick={showActiveLink}>
                                    Indian Head Massage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/la-stone-therapy`}
                                    onClick={showActiveLink}>
                                    LA Stone Therapy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/acupuncture`}
                                    onClick={showActiveLink}>
                                    Acupuncture
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/corporate-pamper-days`}
                                    onClick={showActiveLink}>
                                    Corporate Pamper Days
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/peer-to-peer`}
                                    onClick={showActiveLink}>
                                    Peer-to-Peer Massage
                                </Link>
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