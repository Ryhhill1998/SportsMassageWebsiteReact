import "./Acupuncture.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import acupunctureImageSrc from "../../Images/acupuncture.jpg";
import pain from "../../Images/muscle-pain.png";
import healing from "../../Images/healing.png";
import stress from "../../Images/stress.png";
import energy from "../../Images/energy.png";
import {useEffect} from "react";

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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