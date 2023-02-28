import "./corporatePamperDays.css";

import pamperDaysImageSrc from "../../Images/pamperDays.jpeg";
import About from "../../Components/AboutSection/About.component";

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

const PamperDays = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default PamperDays;