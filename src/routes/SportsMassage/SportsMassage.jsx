import "./SportsMassage.css";

import About from "../../components/AboutSection/About.component";
import DottedSeparator from "../../components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection.component";

import sportsMassageImageSrc from "../../images/sportsMassage.jpeg";
import muscle from "../../images/muscle.png";
import stress from "../../images/stress.png";
import performance from "../../images/performance.png";
import {useEffect} from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const cardInfo = {
    heading: "Sports Massage",
    content: [
        `Sports Massage combines advanced massage techniques, stretching exercises and aftercare advice for an 
        intensive treatment which is ideal for both adults and juniors who want to maintain and improve their athletic 
        performance.`,
        `An invigorating massage which manages, manipulates and rehabilitates soft body tissue using additional deeper 
        massage methods including Neuro-Muscular Technique and Trigger Point Therapy.`,
        `Used to prevent and rehabilitate various problems, including sports related injuries and improving posture 
        and relieving back pain by increasing flexibility and improving the suppleness of muscles and joints.`,
    ],
    imageSrc: sportsMassageImageSrc
};

const conditions = [
    "Muscle pain and tension",
    "Muscle injuries",
    "Stress",
    "Headaches",
    "Flexibility problems",
    "Soft-tissue damage",
    "Back pain"
]

const benefits = [
    {
        iconImageSrc: muscle,
        description: "Helps to aid muscle recovery"
    },
    {
        iconImageSrc: stress,
        description: "Helps to relieve stress and tension"
    },
    {
        iconImageSrc: performance,
        description: "Helps to boost performance"
    }
];

const SportsMassage = () => {

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

export default SportsMassage;