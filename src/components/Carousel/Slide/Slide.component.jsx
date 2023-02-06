import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

import "./Slide.styles.css";

const Slide = ({iconImageSrc, review, author, i}) => {
    return (
        <figure className={`slide ${i < 2 ? "hidden" : ""}`}>
            <div className="avatar-background">
                <img className="avatar" src={iconImageSrc} alt="avatar"/>
            </div>

            <p>
                <FontAwesomeIcon icon={faQuoteLeft} className="icon quotation-mark" />
                {review}
                <FontAwesomeIcon icon={faQuoteRight} className="icon quotation-mark" />
            </p>
            <figcaption>{author}</figcaption>
        </figure>
    );
};

export default Slide;