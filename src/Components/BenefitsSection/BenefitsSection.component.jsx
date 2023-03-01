import "./BenefitsSection.styles.css";
import BenefitCard from "../BenefitCard/BenefitCard.component";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo.component";

const BenefitsSection = ({infoTitle, info, extraInfo, benefits}) => {
    return (
        <div className="benefits-section-container">
            <div className="benefits-cards-container">
                {benefits.map((benefit, i) => {
                    return <BenefitCard key={i} {...benefit}/>
                })}
            </div>

            <div className="conditions-card-container">
                <AdditionalInfo title={infoTitle} info={info} extraInfo={extraInfo}/>
            </div>
        </div>
    );
}

export default BenefitsSection;