import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

import "./MainNav.styles.css";
import {useEffect} from "react";

const MainNav = () => {

    useEffect(() => {
        const splitRoute = window.location.href.split("/").at(-1);

        if (!splitRoute.length) return;

        const routeName = splitRoute.split("-")
            .map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");

        const allLinks = [...document.querySelectorAll("#services-dropdown a")];
        const activeLink = allLinks.filter(link => link.innerHTML === routeName);

        highlightActiveLink(activeLink[0]);
    }, []);

    const showActiveLink = ({target}) => {
        removeAllActiveLinks();
        highlightActiveLink(target);
    }

    const highlightActiveLink = (target) => target.classList.add("dropdown-selected");

    const removeAllActiveLinks = () => {
        const allLinks = document.querySelectorAll("#services-dropdown a");

        allLinks.forEach(link => {
            link.classList.remove("dropdown-selected");
        });

        hideServices();
    }

    const hideServices = () => {
        document.getElementById("services-dropdown").classList.add("no-display");
    }

    const toggleServices = () => {
        document.getElementById("services-dropdown").classList.toggle("no-display");
    }

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to={`/`} onClick={removeAllActiveLinks}>Home</Link></li>
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