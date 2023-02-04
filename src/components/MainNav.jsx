import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#top">Home</a></li>
                <li className="services">
                    <a className="dropdown-button" id="services-button">
                        Services
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow" />
                    </a>
                    <div id="services-dropdown" className="hidden">
                        <ul>
                            <li><a href="">Sports Massage</a></li>
                            <li><a href="">Reflexology</a></li>
                            <li><a href="">Swedish Massage</a></li>
                            <li><a href="">Indian Head Massage</a></li>
                            <li><a href="">LA Stone Therapy</a></li>
                            <li><a href="">Corporate Pamper Days</a></li>
                            <li><a href="">Peer-to-Peer Massage</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="">FAQs</a></li>
                <li><a href="#section--testimonials">Testimonials</a></li>
                <li><a href="#top" className="contact-button">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MainNav;