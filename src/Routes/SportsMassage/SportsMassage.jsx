import "./SportsMassage.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import sportsMassageImageSrc from "../../Images/sportsMassage.jpeg";
import muscle from "../../Images/muscle.png";
import stress from "../../Images/stress.png";
import performance from "../../Images/performance.png";

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

export default SportsMassage;