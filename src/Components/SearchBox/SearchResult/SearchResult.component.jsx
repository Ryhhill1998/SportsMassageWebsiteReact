import "./SearchResult.styles.css";

const SearchResult = ({title, route}) => {
    return (
        <li>
            <a className="result search-result" href={route}>
                {title}
            </a>
        </li>
    );
}

export default SearchResult;