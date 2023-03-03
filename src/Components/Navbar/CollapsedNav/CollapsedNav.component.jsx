import {faCaretDown, faCircleChevronDown, faMagnifyingGlass, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link} from "react-router-dom";
import {navigationLinks} from "../MainNav/MainNav.component";
import NavigationLink from "../NavigationLink/NavigationLink.component";
import {useContext, useState} from "react";
import SearchBox from "../../SearchBox/SearchBox.component";
import {DropdownSearchContext} from "../../../Contexts/DropdownSearch.context";
import {ContactFormContext} from "../../../Contexts/ContactForm.context";

const CollapsedNav = () => {

    const {dropdownSearch, setDropdownSearch} = useContext(DropdownSearchContext);
    const {setContactFormOpen} = useContext(ContactFormContext);

    const toggleDropdown = () => {
        document.getElementById("dropdown-menu").classList.toggle("no-display");
    }

    const hideDropdown = () => {
        document.getElementById("dropdown-menu").classList.add("no-display");
    }

    const dropdownSearchBox = () => {
        setDropdownSearch(!dropdownSearch);
    }

    const handleContactClicked = () => {
        hideDropdown();
        setContactFormOpen(true);
    }

    return (
        <>
            <nav className="collapsed-nav">
                <ul>
                    <li onClick={dropdownSearchBox} className="open-search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    </li>
                    <li className="dropdown-button" id="hamburger" onClick={toggleDropdown}>
                        Menu <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </li>
                </ul>
            </nav>

            {dropdownSearch &&
                <div className="dropdown-search-container">
                    <ul>
                        <SearchBox/>
                    </ul>
                </div>
            }

            <div id="dropdown-menu" className="collapsed-nav-dropdown no-display">
                <ul>
                    <NavigationLink text="Home" route="/" onClickHandler={hideDropdown} />
                    {navigationLinks.map((navLink, i) => (
                        <NavigationLink key={i} {...navLink} onClickHandler={hideDropdown} />
                    ))}

                    <li><Link to={"/faqs"} onClick={hideDropdown}>FAQs</Link></li>
                    <li><Link to={"/"} onClick={handleContactClicked} className="contact-button">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default CollapsedNav;