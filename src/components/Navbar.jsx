import logo from "../images/logo-with-text.png";

const Navbar = () => {
    return (
        <header>
            <div className="container">

                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                    <ul className="contact-info">
                        <li><i className="fas fa-phone-alt"></i> 07446 258 822</li>
                        <li><i className="fas fa-envelope"></i> rrsportsmassage@outlook.com</li>
                        <li className="search-container">
                            <div className="search-box">
                                <input id="search-field" type="search" placeholder="Search..."/>
                                <button id="search-button">Go</button>
                            </div>
                            <ul id="search-results-container" className="search-results-dropdown"></ul>
                        </li>
                    </ul>
                </div>

                <div className="collapse-nav">
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#top">Home</a></li>
                            <li className="services">
                                <a className="dropdown-button" id="services-button">
                                    Services
                                    <span className="dropdown-arrow"></span>
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

                    <nav className="collapsed">
                        <ul>
                            <li className="dropdown-button" id="hamburger">Menu <span
                                className="dropdown-arrow">&#10094</span></li>
                        </ul>
                    </nav>
                    <div id="dropdown-menu" className="hidden">
                        <ul>
                            <li><a className="dropdown-selected" href="index.html">Home</a></li>
                            <li><a href="">Sports Massage</a></li>
                            <li><a href="">Reflexology</a></li>
                            <li><a href="">Swedish Massage</a></li>
                            <li><a href="">Indian Head Massage</a></li>
                            <li><a href="">LA Stone Therapy</a></li>
                            <li><a href="">Corporate Pamper Days</a></li>
                            <li><a href="">Peer-to-Peer Massage</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="#section--testimonials">Testimonials</a></li>
                            <li><a href="#top" className="contact-button">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;