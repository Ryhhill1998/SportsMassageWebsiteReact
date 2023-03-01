import './Home.css';

import About from "../../Components/AboutSection/About.component";
import Services from "../../Components/ServicesSection/Services.component";
import Carousel from "../../Components/Carousel/Carousel.component";
import DottedSeparator from "../../Components/DottedSeparator/DottedSeparator.component";

import massageImageSrc from "../../Images/massage.jpeg";
import {useEffect} from "react";

const aboutCardInfo = {
    heading: "About Us",
    content: [
        `Whether you’re looking for support recovering from an injury, some respite from a niggling pain or simply want 
        to unwind and de-stress, R&R Sports Massage & Reflexology offers a range of treatments that can help including 
        Sports Massage, Reflexology, Swedish Massage and LA Stone Therapy.`,
        `Our clients typically fall into one of the following categories:`,
        `Those looking for support recovering from a soft tissue injury such as a sprain or pulled muscle.`,
        `Those seeking relief from pain or discomfort such as back pain sciatica, migraines or headaches...`
    ],
    imageSrc: massageImageSrc
};

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="container">
            <h1 className="intro-heading">Welcome!</h1>

            <section id="section--about">
                <About {...aboutCardInfo} />
            </section>

            <DottedSeparator/>

            <section id="section--services">
                <h2>Our Services</h2>
                <Services/>
            </section>

            <DottedSeparator/>

            <section id="section--testimonials">
                <h2>Testimonials</h2>
                <Carousel/>
            </section>
        </main>
    );
}

export default Home;
