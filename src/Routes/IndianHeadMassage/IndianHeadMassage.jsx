import "./IndianHeadMassage.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import indianHeadMassageImageSrc from "../../Images/indianHeadMassage.jpeg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";

const cardInfo = {
    heading: "Indian Head Massage",
    content: [
        `Practised in India for over a thousand years and brought to the west in the 1970's, Indian Head Massage now 
        includes the scalp, face, ears, neck, shoulders and upper arms.`,
        `A thorough massage of the scalp improves circulation and relieves headaches. Next, the face, ears, neck, 
        shoulder and finally, upper arms are massaged, releasing stress and tension which has accumulated in the 
        tissues, muscles and joints.`,
        `Indian Head Massage is a deeply calming treatment that will leave you feeling energised and revitalised.`
    ],
    imageSrc: indianHeadMassageImageSrc
};

const conditions = [
    "Hormonal imbalances",
    "Menopause",
    "Back pain",
    "Migraines, headaches",
    "Sleep disorders",
    "Digestive problems",
    "Circulatory problems",
    "Stress-related disorders",
    "Arthritis"
]

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

const IndianHeadMassage = () => {
    return (
        <main className="container">
            <section id="section--about">
                <About {...cardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--benefits">
                <BenefitsSection conditions={conditions} benefits={benefits}/>
            </section>

            {/*<DottedSeparator/>*/}
        </main>
    );
}

export default IndianHeadMassage;