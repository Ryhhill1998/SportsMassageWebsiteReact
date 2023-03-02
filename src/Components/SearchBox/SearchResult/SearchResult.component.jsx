import "./SearchResult.styles.css";
import {Link} from "react-router-dom";

const SearchResult = ({title, route, onClickHandler}) => {
    return (
        <li>
            <Link to={route} onClick={onClickHandler} className="result search-result">
                {title}
            </Link>
        </li>
    );
}

export default SearchResult;