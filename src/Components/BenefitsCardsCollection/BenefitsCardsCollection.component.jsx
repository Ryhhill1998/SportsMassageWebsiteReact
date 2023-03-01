import "./BenefitsCardCollection.styles.css";
import BenefitCard from "../BenefitCard/BenefitCard.component";

const BenefitsCardsCollection = ({benefits}) => {
    return (
        <div className="benefits-card-container">
            {benefits.map((benefit, i) => {
                return <BenefitCard key={i} {...benefit}/>
            })}
        </div>
    );
}

export default BenefitsCardsCollection;