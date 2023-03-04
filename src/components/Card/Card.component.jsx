import "./Card.styles.css";

import ReadMore from "../ReadMore/ReadMore.component";

const CardComponent = ({imageSrc, heading, content, route}) => {
    return (
        <figure className="card">
            <div>
                <img src={imageSrc} alt={heading}/>
            </div>

            <figcaption>
                <h3>{heading}</h3>

                <p>{content}</p>

                <ReadMore route={route} />
            </figcaption>
        </figure>
    )
};

export default CardComponent;