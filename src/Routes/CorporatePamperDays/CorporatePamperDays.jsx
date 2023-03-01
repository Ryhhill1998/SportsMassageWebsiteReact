import "./CorporatePamperDays.css";

import About from "../../Components/AboutSection/About.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection.component";

import pamperDaysImageSrc from "../../Images/pamperDays.jpeg";
import energy from "../../Images/energy.png";
import stress from "../../Images/stress.png";
import relax from "../../Images/relax.png";
import reward from "../../Images/reward.png";
import {useEffect} from "react";


const cardInfo = {
    heading: "Corporate Pamper Days",
    content: [
        `Corporate Pamper Days are an excellent way to celebrate a milestone in your business or simply reward your 
        team! We can come to your premises and provide a range of treatments for you and your staff.`,
        `Choose from Sports Massage, Reflexology, Swedish Massage, Indian Head Massage and LA Stone Therapy to help 
        your team relax, de-stress and re-energise`,
        `It's a great way to say thank you to your team or simply indulge them. Either way, they'll return refreshed 
        and revitalised.`
    ],
    imageSrc: pamperDaysImageSrc
};

const treatments = [
    "Sports Massage",
    "Reflexology",
    "Swedish Massage",
    "Indian Head Massage",
    "LA Stone Therapy"
]

const benefits = [
    {
        iconImageSrc: energy,
        description: "Leaves your team feeling energised"
    },
    {
        iconImageSrc: stress,
        description: "Helps relieve stress and tension"
    },
    {
        iconImageSrc: relax,
        description: "Helps your team to relax"
    },
    {
        iconImageSrc: reward,
        description: "Your team will feel rewarded"
    }
];

const extraInfo = "Typically includes up to 6 hours of treatments, made up of 12 x 30 min sessions.";

const PamperDays = () => {

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
                <BenefitsSection
                    infoTitle="Available Treatments"
                    info={treatments}
                    benefits={benefits}
                    extraInfo={extraInfo}
                />
            </section>

            {/*<DottedSeparator/>*/}
        </main>
    );
}

export default PamperDays;