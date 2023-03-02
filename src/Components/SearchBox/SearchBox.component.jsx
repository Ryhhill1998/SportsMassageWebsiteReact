import "./SearchBox.styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import SearchResult from "./SearchResult/SearchResult.component";

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
    const [searchResults, setSearchResults] = useState([]);

    const processSearch = () => {
        const search = document.getElementById("search-field").value;
        if (!search) {
            console.log("no results");
            return;
        }
        const possibleSearches = Object.keys(searchResultRoutes);
        const results = possibleSearches.filter(result => result.includes(search));
        console.log(results);

        const newSearchResults = results.map(result => {
            return {
                title: result,
                route: possibleSearches[result]
            }
        });

        setSearchResults(newSearchResults);
    }

    return (
        <li className="search-container">
            <div className="search-box">
                <input id="search-field" type="search" placeholder="Search..."/>
                <button id="search-button" onClick={processSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                </button>
            </div>
            <ul id="search-results-container" className="search-results-dropdown">
                {searchResults.map((result, i) => (
                    <SearchResult key={i} {...result} />
                ))}
            </ul>
        </li>
    );
}

export default SearchBox;