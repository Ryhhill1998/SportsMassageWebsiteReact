import "./Acupuncture.css";

import {useEffect} from "react";

import About from "../../components/AboutSection/About.component";
import DottedSeparator from "../../components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection.component";

import acupunctureImageSrc from "../../images/acupuncture.jpg";
import pain from "../../images/muscle-pain.png";
import healing from "../../images/healing.png";
import stress from "../../images/stress.png";
import energy from "../../images/energy.png";
import useScrollToTop from "../../hooks/useScrollToTop";

const cardInfo = {
    heading: "Acupuncture",
    content: [
        `Medical Acupuncture, often called ‘Dry Needling’, is generally used to help muscle and joint problems. Needles 
        are inserted at various sites in the body for preventative or therapeutic purposes.`,
        `It involves stimulating sensory nerves under the skin and in the muscles. This results in pain relieving 
        endorphins, natural substances being produced by the body. It is based on the belief that an energy, known as 
        Qi, flows through the channels in the body called meridians.`,
        `An initial session usually lasts between 30 minutes to 1 hour and involves a consultation, which assesses 
        your general health, medical history and a physical examination. `
    ],
    imageSrc: acupunctureImageSrc
};

const conditions = [
    "Chronic pain",
    "Migraines and headaches",
    "Joint problems",
    "Dental pain",
    "Post-operative pain",
    "Neck and back pain",
    "Stroke"
]

const benefits = [
    {
        iconImageSrc: pain,
        description: "Helps reduce pain and discomfort"
    },
    {
        iconImageSrc: healing,
        description: "Helps to promote healing"
    },
    {
        iconImageSrc: stress,
        description: "Helps relieve stress and tension"
    },
    {
        iconImageSrc: energy,
        description: "Helps to increase energy levels"
    }
];

const Acupuncture = () => {

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

export default Acupuncture;