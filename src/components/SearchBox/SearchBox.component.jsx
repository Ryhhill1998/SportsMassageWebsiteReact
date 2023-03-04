import "./SearchBox.styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import SearchResult from "./SearchResult/SearchResult.component";

import { useDispatch } from 'react-redux';
import { hideDropdownSearch } from "../../features/dropdownSearch/dropdownSearchSlice.js";

const searchResultRoutes = {
    "home": "/",
    "sports massage": "/sports-massage",
    "reflexology": "/reflexology",
    "swedish massage": "/swedish-massage",
    "indian head massage": "/indian-head-massage",
    "la stone therapy": "/la-stone-therapy",
    "corporate pamper days": "/corporate-pamper-days",
    "peer-to-peer massages": "/peer-to-peer",
    "acupuncture": "/acupuncture",
    "faqs": "/faqs",
    "frequently asked questions": "/faqs",
    "testimonials": "/#section--testimonials"
}

const SearchBox = () => {
    const dispatch = useDispatch();

    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const updateSearchQuery = ({target}) => setSearchQuery(target.value);

    const processSearch = () => {
        if (!searchQuery) {
            setSearchResults([{title: "No results found", active: false}]);
            return;
        }

        const possibleSearches = Object.keys(searchResultRoutes);

        let results = possibleSearches
            .filter(result => result.includes(searchQuery.toLowerCase()))
            .map(result => ({
                title: result,
                route: searchResultRoutes[result],
                active: true
            }));

        if (!results.length) {
            results = [{title: "No results found", active: false}];
        }

        setSearchResults(results);
    }

    const clearSearchResults = () => setSearchResults([]);

    const clearSearchField = () => setSearchQuery("");

    const resultClickedHandler = () => {
        clearSearchField();
        clearSearchResults();
        dispatch(hideDropdownSearch());
    }

    return (
        <li className="search-container">
            <div className="search-box">
                <input
                    id="search-field"
                    type="search" placeholder="Search..."
                    onClick={clearSearchResults}
                    onChange={updateSearchQuery}
                    value={searchQuery}
                    autoComplete="off"
                />
                <button id="search-button" onClick={processSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                </button>
            </div>
            <ul id="search-results-container" className="search-results-dropdown">
                {searchResults.map((result, i) => (
                    <SearchResult key={i} {...result} onClickHandler={resultClickedHandler} />
                ))}
            </ul>
        </li>
    );
}

export default SearchBox;