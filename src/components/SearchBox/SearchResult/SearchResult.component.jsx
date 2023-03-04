import "./SearchResult.styles.css";
import {Link} from "react-router-dom";

const SearchResult = ({title, route, active, onClickHandler}) => {
    const handleClick = () => {
        if (!active) return null;
        onClickHandler();
    }

    return (
        <li>
            <Link to={route} onClick={handleClick} className={`result search-result ${active ? "active" : ""}`}>
                {title}
            </Link>
        </li>
    );
}

export default SearchResult;