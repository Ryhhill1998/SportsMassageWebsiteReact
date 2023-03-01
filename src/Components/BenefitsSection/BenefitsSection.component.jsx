import "./BenefitsSection.styles.css";
import BenefitCard from "../BenefitCard/BenefitCard.component";
import ApplicableConditionsCard from "../ApplicableConditionsCard/ApplicableConditionsCard.component";

const BenefitsSection = ({conditions, benefits}) => {
    return (
        <>
            <div className="conditions-card-container">
                <ApplicableConditionsCard conditions={conditions}/>
            </div>

            <div className="benefits-container">
                <h2>BENEFITS</h2>

                <div className="benefits-card-container">
                    {benefits.map((benefit, i) => {
                        return <BenefitCard key={i} {...benefit}/>
                    })}
                </div>
            </div>
        </>
    );
}

export default BenefitsSection;