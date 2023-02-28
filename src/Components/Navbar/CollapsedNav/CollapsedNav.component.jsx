import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const CollapsedNav = () => {

    useEffect(() => {
        const splitRoute = window.location.href.split("/").at(-1);

        let activeLink;

        if (!splitRoute.length) {
            activeLink = document.querySelector("#dropdown-menu a:first-child");
        } else {
            const routeName = splitRoute.split("-")
                .map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");

            const allLinks = [...document.querySelectorAll("#dropdown-menu a")];
            activeLink = allLinks.filter(link => link.innerHTML === routeName)[0];
        }

        highlightActiveLink(activeLink);
    }, []);

    const highlightActiveLink = (target) => target.classList.add("dropdown-selected");

    const toggleDropdown = () => {
        document.getElementById("dropdown-menu").classList.toggle("no-display");
    }

    const hideDropdown = () => {
        document.getElementById("dropdown-menu").classList.add("no-display");
    }

    const showActiveLink = ({target}) => {
        removeAllActiveLinks();

        target.classList.add("dropdown-selected");
    }

    const removeAllActiveLinks = () => {
        const allLinks = document.querySelectorAll("#dropdown-menu a");

        allLinks.forEach(link => {
            link.classList.remove("dropdown-selected");
        });

        hideDropdown();
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
                    <li><Link to={"/"} onClick={showActiveLink}>Home</Link></li>
                    <li><Link to={"/sports-massage"} onClick={showActiveLink}>Sports Massage</Link></li>
                    <li><Link to={"/reflexology"} onClick={showActiveLink}>Reflexology</Link></li>
                    <li><Link to={"/swedish-massage"} onClick={showActiveLink}>Swedish Massage</Link></li>
                    <li><Link to={"/indian-head-massage"} onClick={showActiveLink}>Indian Head Massage</Link></li>
                    <li><Link to={"/la-stone-therapy"} onClick={showActiveLink}>LA Stone Therapy</Link></li>
                    <li><Link to={"/corporate-pamper-days"} onClick={showActiveLink}>Corporate Pamper Days</Link></li>
                    <li><Link to={"/peer-to-peer"} onClick={showActiveLink}>Peer-to-Peer Massage</Link></li>
                    <li><Link to={"/"}>FAQs</Link></li>
                    <li><Link to={"/"}>Testimonials</Link></li>
                    <li><Link to={"/"} className="contact-button">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;