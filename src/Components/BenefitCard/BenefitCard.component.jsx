import "./BenefitCard.styles.css";

const BenefitCard = ({iconImageSrc, description}) => {
    return (
        <figure className="benefit-card">
            <div className="icon-image-container">
                <img className="icon-image" src={iconImageSrc} alt="avatar"/>
            </div>

            <p>{description}</p>
        </figure>
    );
}

export default BenefitCard;