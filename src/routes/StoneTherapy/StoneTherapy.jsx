import "./StoneTherapy.css";

import About from "../../components/AboutSection/About.component";
import DottedSeparator from "../../components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection.component";

import stoneTherapyImageSrc from "../../images/stoneTherapy.jpeg";
import stress from "../../images/stress.png";
import relax from "../../images/relax.png";
import energy from "../../images/energy.png";
import heart from "../../images/heart.png";
import {useEffect} from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const cardInfo = {
    heading: "LA Stone Therapy",
    content: [
        `Hot stone massage combines the benefits of thermotherapy with massage strokes, creating a deeper and more 
        relaxing treatment.`,
        `Polished and smooth, water- heated Basalt (lava rocks) stones are used to apply pressure and heat to the body. 
        Stones coated in oil can also be used to deliver various massaging strokes. The stones are placed along the 
        client’s back; they help to retain heat which then deeply penetrates into the muscles.`,
    ],
    imageSrc: stoneTherapyImageSrc
};

const conditions = [
    "Muscular pain",
    "Poor circulation",
    "Rheumatic and arthritic conditions",
    "Fibromyalgia",
    "Back pain",
    "Stress",
    "Insomnia",
    "Depression"
]

const benefits = [
    {
        iconImageSrc: energy,
        description: "Leaves you feeling energised"
    },
    {
        iconImageSrc: stress,
        description: "Helps to relieve stress and tension"
    },
    {
        iconImageSrc: heart,
        description: "Helps to improve circulation"
    },
    {
        iconImageSrc: relax,
        description: "Helps to relax the body and mind"
    }
];

const StoneTherapy = () => {

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

export default StoneTherapy;