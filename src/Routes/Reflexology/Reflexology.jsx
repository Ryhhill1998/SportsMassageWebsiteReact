import "./Reflexology.css";

import reflexologyImageSrc from "../../Images/reflexology.jpeg";
import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import ApplicableConditionsCard from "../../Components/ApplicableConditionsCard/ApplicableConditionsCard.component";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";
import BenefitsCardsCollection from "../../Components/BenefitsCardsCollection/BenefitsCardsCollection.component";

const cardInfo = {
    heading: "Reflexology",
    content: [
        `Reflexology is an alternative medicine suitable for all ages and involves application of pressure to the feet 
        and hands with specific thumb, finger, and hand techniques.`,
        `It is based on a system of zones and reflex areas on the foot or hand that match areas of the body. 
        Manipulating these areas promotes self-healing and brings balance to the body.`,
        `Helping to strengthen the immune system it is a wonderfully relaxing treatment which also detoxifies and 
        cleanses the body whilst relaxing muscles and relieving stress and tension.`,
        `A treatment ensures every part of the foot or hand is worked on and a relaxing and soothing foot or hand 
        massage concludes the treatment.`
    ],
    imageSrc: reflexologyImageSrc
};

const benefits = [
    {
        iconImageSrc: immunity,
        description: "Helps boost the immune system"
    },
    {
        iconImageSrc: stress,
        description: "Helps relieve stress and tension"
    },
    {
        iconImageSrc: relax,
        description: "Helps relax and detoxify the body"
    }
];

const Reflexology = () => {
    return (
        <main className="container">
            <section id="section--about">
                <About {...cardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--benefits">
                <div className="conditions-card-container">
                    <ApplicableConditionsCard/>
                </div>

                <div className="benefits-container">
                    <h2>BENEFITS</h2>

                    <BenefitsCardsCollection benefits={benefits} />
                </div>
            </section>

            <DottedSeparator/>
        </main>
    );
}

export default Reflexology;