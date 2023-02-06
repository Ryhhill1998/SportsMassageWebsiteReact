import "./Card.styles.css";

import ReadMore from "../ReadMore/ReadMore.component";

const CardComponent = ({imageSrc, heading, content}) => {
    return (
        <figure className="card">
            <div>
                <img src={imageSrc} alt={heading}/>
            </div>

            <figcaption>
                <h3>{heading}</h3>

                <p>{content}</p>

                <ReadMore/>
            </figcaption>
        </figure>
    )
};

export default CardComponent;