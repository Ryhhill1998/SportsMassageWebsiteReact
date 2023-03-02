import "./SearchResult.styles.css";
import {Link} from "react-router-dom";

const SearchResult = ({title, route}) => {
    return (
        <li>
            <Link to={route} className="result search-result">
                {title}
            </Link>
        </li>
    );
}

export default SearchResult;