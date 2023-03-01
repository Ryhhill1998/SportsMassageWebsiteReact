import "./SportsMassage.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import sportsMassageImageSrc from "../../Images/sportsMassage.jpeg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";

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