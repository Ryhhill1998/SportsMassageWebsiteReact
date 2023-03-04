import "./IndianHeadMassage.css";

import About from "../../components/AboutSection/About.component";
import DottedSeparator from "../../components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection.component";

import indianHeadMassageImageSrc from "../../images/indianHeadMassage.jpeg";
import energy from "../../images/energy.png";
import stress from "../../images/stress.png";
import heart from "../../images/heart.png";
import {useEffect} from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

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
    "Tension headaches",
    "Migraines",
    "Eye strain",
    "Tinnitus and other ear problems",
    "Neck and shoulder tension",
    "Stress",
    "Anxiety and depression"
]

const benefits = [
    {
        iconImageSrc: energy,
        description: "Leaves you feeling energised"
    },
    {
        iconImageSrc: stress,
        description: "Helps relieve stress and tension"
    },
    {
        iconImageSrc: heart,
        description: "Helps to improve circulation"
    }
];

const IndianHeadMassage = () => {

    useEffect(() => useScrollToTop, []);

    return (
        <main className="container">
            <section id="section--about">
                <About {...cardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--benefits">
                <BenefitsSection infoTitle="Applicable Conditions" info={conditions} benefits={benefits}/>
            </section>

            {/*<DottedSeparator/>*/}
        </main>
    );
}

export default IndianHeadMassage;