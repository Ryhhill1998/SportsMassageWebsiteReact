import './App.css';

import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

import massageImageSrc from "./images/massage.jpeg";
import sportsMassageImageSrc from "./images/sportsMassage.jpeg";
import reflexologyImageSrc from "./images/reflexology.jpeg";
import swedishImageSrc from "./images/swedishMassage.jpeg";
import indianHeadMassageImageSrc from "./images/indianHeadMassage.jpeg";
import stoneTherapyImageSrc from "./images/stoneTherapy.jpeg";
import pamperDaysImageSrc from "./images/pamperDays.jpeg";
import TestimonialsSection from "./components/TestimonialsSection";

const aboutCardInfo = {
    heading: "About Us",
    content: [
        `Whether you’re looking for support recovering from an injury, some respite from a niggling pain or simply want 
        to unwind and de-stress, R&R Sports Massage & Reflexology offers a range of treatments that can help including 
        Sports Massage, Reflexology, Swedish Massage and LA Stone Therapy.`,
        `Our clients typically fall into one of the following categories:`,
        `Those looking for support recovering from a soft tissue injury such as a sprain or pulled muscle.`,
        `Those seeking relief from pain or discomfort such as back pain sciatica, migraines or headaches.`,
        `Indeed our treatment can help increase flexibility and elasticity as well as improving function in patients 
        with osteoarthritis.`,
        `And there are those that are simply looking to unwind, de-stress and re-energise.`,
        `There are so many health benefits asssociated with massage that you should never feel guilty about having one!`,
        `We also offer corporate pamper days to companies who might be looking to reward their team or simply boost 
        employee morale, helping them to feel revitalised mentally and physically.`,
        `We are also proud to be part of the Peer Massage Project which offers peer massage sessions to schools.`
    ],
    imageSrc: massageImageSrc
};

const App = () => {
    const {heading, content, imageSrc} = aboutCardInfo;

    return (
        <div className="App">
            <Navbar/>

            <main className="container">
                <h1 className="intro-heading">Welcome!</h1>

                <AboutSection heading={heading} content={content} imageSrc={imageSrc} />

                <hr className="section-separator"/>

                <ServicesSection/>

                <hr className="section-separator"/>

                <TestimonialsSection/>

            </main>
        </div>
    );
}

export default App;
