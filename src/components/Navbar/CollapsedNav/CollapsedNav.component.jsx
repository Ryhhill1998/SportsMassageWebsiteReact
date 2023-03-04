import {faCircleChevronDown, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CollapsedNav.styles.css";
import {Link} from "react-router-dom";
import {navigationLinks} from "../MainNav/MainNav.component";
import NavigationLink from "../NavigationLink/NavigationLink.component";
import SearchBox from "../../SearchBox/SearchBox.component";

import { useSelector, useDispatch } from 'react-redux';
import { hideDropdownSearch, toggleDropdownSearch } from "../../../features/dropdownSearch/dropdownSearchSlice.js";

const CollapsedNav = () => {

    const isDropdownSearchVisible = useSelector(state => state.dropdownSearch.visible);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        document.getElementById("dropdown-menu").classList.toggle("no-display");
    }

    const hideDropdown = () => {
        document.getElementById("dropdown-menu").classList.add("no-display");
    }

    const dropdownSearchBox = () => {
        dispatch(toggleDropdownSearch());
    }

    const handleContactClicked = () => {
        hideDropdown();
        dispatch(hideDropdownSearch());
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

            {isDropdownSearchVisible &&
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