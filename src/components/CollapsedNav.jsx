const CollapsedNav = () => {
    return (
        <>
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
        </>
    );
};

export default CollapsedNav;