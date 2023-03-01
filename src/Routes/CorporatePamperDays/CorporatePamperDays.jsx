import "./CorporatePamperDays.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import pamperDaysImageSrc from "../../Images/pamperDays.jpeg";
import immunity from "../../Images/immune-system.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";

const cardInfo = {
    heading: "Corporate Pamper Days",
    content: [
        `Corporate Pamper Days are an excellent way to celebrate a milestone in your business or simply reward your 
        team! We can come to your premises and provide a range of treatments for you and your staff.`,
        `Choose from Sports Massage, Reflexology, Swedish Massage, Indian Head Massage and LA Stone Therapy to help 
        your team relax, de-stress and re-energise`,
        `It's a great way to say thank you to your team or simply indulge them. Either way, they'll return refreshed 
        and revitalised.`,
        `A typical pamper day includes up to 6 hours of treatments, usually made up of 12 x 30 min sessions, but the 
        package can be tailored to your specific requirements.`
    ],
    imageSrc: pamperDaysImageSrc
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

const PamperDays = () => {
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

export default PamperDays;