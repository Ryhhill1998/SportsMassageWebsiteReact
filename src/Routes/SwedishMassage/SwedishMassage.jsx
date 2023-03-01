import "./SwedishMassage.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import swedishMassageImageSrc from "../../Images/swedishMassage.jpeg";
import musclePain from "../../Images/muscle-pain.png";
import sleep from "../../Images/sleep.png";
import heart from "../../Images/heart.png";

const cardInfo = {
    heading: "Swedish Massage",
    content: [
        `A gentle, relaxing and rhythmical, full body massage which increases the oxygen flow in the blood and 
        releases toxins from the muscles. Reducing emotional and physical stress, it stimulates the skin and soothes 
        the nervous system.`,
        `Swedish massage has been shown to help with reducing pain and muscle tension, relaxing soft body tissue and 
        loosening stiff joints, improving function in patients with osteoarthritis and facilitating healing.`,
    ],
    imageSrc: swedishMassageImageSrc
};

const conditions = [
    "Joint pain",
    "Muscle tension",
    "Osteoarthritis",
    "Stress",
    "Fibromyalgia",
    "Headaches and migraines",
    "Anxiety and depression",
    "Sleep disorders"
]

const benefits = [
    {
        iconImageSrc: musclePain,
        description: "Helps to alleviate muscle pain"
    },
    {
        iconImageSrc: sleep,
        description: "Helps to improve sleep quality"
    },
    {
        iconImageSrc: heart,
        description: "Helps to improve circulation"
    }
];

const SwedishMassage = () => {
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

export default SwedishMassage;