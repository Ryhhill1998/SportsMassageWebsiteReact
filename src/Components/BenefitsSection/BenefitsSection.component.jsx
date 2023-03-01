import "./BenefitsSection.styles.css";
import BenefitCard from "../BenefitCard/BenefitCard.component";
import ApplicableConditionsCard from "../ApplicableConditionsCard/ApplicableConditionsCard.component";

const BenefitsSection = ({conditions, benefits}) => {
    return (
        <div className="benefits-section-container">
            <div className="benefits-cards-container">
                {benefits.map((benefit, i) => {
                    return <BenefitCard key={i} {...benefit}/>
                })}
            </div>

            <div className="conditions-card-container">
                <ApplicableConditionsCard conditions={conditions}/>
            </div>
        </div>
    );
}

export default BenefitsSection;