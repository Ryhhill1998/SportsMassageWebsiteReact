import "./PeerToPeer.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import peerToPeerImageSrc from "../../Images/massage.jpeg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";

const cardInfo = {
    heading: "Peer-to-Peer Massage",
    content: [
        `The massage routine is taught in two parts, so the class can practise the techniques in between sessions and 
        we can check that the techniques are being performed correctly.`,
        `In Reception, Year 1 and Year 2, the routine uses the story of The Gruffalo to help the children better 
        engage with the techniques and have fun along the way.`,
    ],
    imageSrc: peerToPeerImageSrc
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

const PeerToPeer = () => {
    return (
        <main className="container">
            <section id="section--about">
                <About {...cardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--benefits">
                <BenefitsSection info={conditions} benefits={benefits}/>
            </section>

            {/*<DottedSeparator/>*/}
        </main>
    );
}

export default PeerToPeer;