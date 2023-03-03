import "./PeerToPeer.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import peerToPeerImageSrc from "../../Images/massage.jpeg";
import social from "../../Images/social.png";
import selfEsteem from "../../Images/self-esteem.png";
import bullying from "../../Images/bullying.png";
import decision from "../../Images/decision.png";
import {useEffect} from "react";
import useScrollToTop from "../../Hooks/useScrollToTop";

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

const details = [
    "There are two parts - each is 30 minutes",
    "In part 1, the routine is performed on the class teacher",
    "Students watch this in pairs and practise the routine on each other",
    "Students swap roles with their partner and repeat the routine",
    "In the next session, the second part of the routine is taught",
    "Children receive a certificate of completion"
]

const benefits = [
    {
        iconImageSrc: social,
        description: "Helps to improve social skills"
    },
    {
        iconImageSrc: selfEsteem,
        description: "Helps to improve self-esteem"
    },
    {
        iconImageSrc: bullying,
        description: "Helps to reduce bullying"
    },
    {
        iconImageSrc: decision,
        description: "Helps to improve decision making"
    }
];

const extraInfo = `Children must ask for their partner's permission before the massage. No student has to 
    participate.`;

const PeerToPeer = () => {

    useEffect(() => useScrollToTop, []);

    return (
        <main className="container">
            <section id="section--about">
                <About {...cardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--benefits">
                <BenefitsSection infoTitle="Routine Details" info={details} extraInfo={extraInfo} benefits={benefits}/>
            </section>

            {/*<DottedSeparator/>*/}
        </main>
    );
}

export default PeerToPeer;