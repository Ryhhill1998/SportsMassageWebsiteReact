import './App.css';

import Navbar from "./components/Navbar/Navbar.component";
import About from "./components/AboutSection/About.component";
import Services from "./components/ServicesSection/Services.component";
import Footer from "./components/Footer/Footer.component";
import Carousel from "./components/Carousel/Carousel.component";
import DottedSeparator from "./components/DottedSeparator/DottedSeparator.component";

import massageImageSrc from "./images/massage.jpeg";

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
        <>
            <Navbar/>

            <main className="container">
                <h1 className="intro-heading">Welcome!</h1>

                <section id="section--about">
                    <About heading={heading} content={content} imageSrc={imageSrc} />
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

            <Footer/>
        </>
    );
}

export default App;
