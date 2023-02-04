const Card = ({imageSrc, heading, content}) => {
    return (
        <figure>
            <div>
                <img src={imageSrc} alt={heading}/>
            </div>

            <figcaption>
                <h3>{heading}</h3>

                <p>{content}</p>

                <a href="" className="read-more">
                    Read more
                </a>
            </figcaption>
        </figure>
    )
};

export default Card;