import "./ReadMore.styles.css";
import {Link} from "react-router-dom";

const ReadMore = ({route}) => {
    return (
        <Link to={route} className="read-more">
            Read more
        </Link>
    );
}

export default ReadMore;