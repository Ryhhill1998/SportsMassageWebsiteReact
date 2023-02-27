import "./SearchBox.styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
    return (
        <li className="search-container">
            <div className="search-box">
                <input id="search-field" type="search" placeholder="Search..."/>
                <button id="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                </button>
            </div>
            <ul id="search-results-container" className="search-results-dropdown"></ul>
        </li>
    );
}

export default SearchBox;