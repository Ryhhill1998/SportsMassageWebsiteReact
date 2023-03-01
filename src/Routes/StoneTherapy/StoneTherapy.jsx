import "./StoneTherapy.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import stoneTherapyImageSrc from "../../Images/stoneTherapy.jpeg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";

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

const StoneTherapy = () => {
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

export default StoneTherapy;