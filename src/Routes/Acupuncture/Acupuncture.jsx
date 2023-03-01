import "./Acupuncture.css";

import About from "../../Components/AboutSection/About.component";

import acupunctureImageSrc from "../../Images/acupuncture.jpg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

const cardInfo = {
    heading: "Acupuncture",
    content: [
        `Medical Acupuncture, often called ‘Dry Needling’, is generally used to help muscle and joint problems. Needles 
        are inserted at various sites in the body for preventative or therapeutic purposes.`,
        `It involves stimulating sensory nerves under the skin and in the muscles. This results in pain relieving 
        endorphins, natural substances being produced by the body. It is based on the belief that an energy, known as 
        Qi, flows through the channels in the body called meridians.`,
        `Practitioners use acupuncture to treat a range of conditions including chronic pain, headaches, migraines, 
        joint problems and dental pain.`
    ],
    imageSrc: acupunctureImageSrc
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

const Acupuncture = () => {
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

export default Acupuncture;