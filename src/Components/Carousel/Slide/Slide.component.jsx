import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

import "./Slide.styles.css";

const Slide = ({iconImageSrc, review, author, slideVisible, i}) => {
    return (
        <figure className={`slide ${slideVisible !== i ? "hidden" : ""}`}>
            <img className="avatar" src={iconImageSrc} alt="avatar"/>

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