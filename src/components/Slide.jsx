const Slide = ({iconImageSrc, review, author, i}) => {
    return (
        <figure className={`testimonial ${i < 2 ? "hidden" : ""}`}>
            <div className="avatar-background">
                <img className="avatar" src={iconImageSrc} alt="avatar"/>
            </div>

            <p>
                <span className="quotation-mark">"</span>
                {review}
                <span className="quotation-mark">"</span>
            </p>
            <figcaption>{author}</figcaption>
        </figure>
    );
};

export default Slide;