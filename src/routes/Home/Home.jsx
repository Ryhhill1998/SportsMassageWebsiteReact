import './Home.css';

import About from "../../components/AboutSection/About.component";
import Services from "../../components/ServicesSection/Services.component";
import Carousel from "../../components/Carousel/Carousel.component";
import DottedSeparator from "../../components/DottedSeparator/DottedSeparator.component";

import massageImageSrc from "../../images/massage.jpeg";
import {useEffect} from "react";
import Logo from "../../components/Logo/Logo.component";
import useScrollToTop from "../../hooks/useScrollToTop";

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

    useEffect(() => useScrollToTop, []);

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
