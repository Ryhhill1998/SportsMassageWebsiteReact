import './App.css';

import Navbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import Card from "./components/Card";

import massageImageSrc from "./images/massage.jpeg";
import sportsMassageImageSrc from "./images/sportsMassage.jpeg";
import reflexologyImageSrc from "./images/reflexology.jpeg";
import swedishImageSrc from "./images/swedishMassage.jpeg";
import indianHeadMassageImageSrc from "./images/indianHeadMassage.jpeg";
import stoneTherapyImageSrc from "./images/stoneTherapy.jpeg";
import pamperDaysImageSrc from "./images/pamperDays.jpeg";

const cards = [
    {
        imageSrc: sportsMassageImageSrc,
        heading: "Sports Massage",
        content: `Sports Massage combines advanced massage techniques, stretching exercises and aftercare advice for 
        an intensive treatment which is ideal for both adults and juniors who want to maintain and improve their 
        athletic performance.`
    },
    {
        imageSrc: reflexologyImageSrc,
        heading: "Reflexology",
        content: `Reflexology is an alternative medicine suitable for all ages and involves application of pressure to 
        the feet and hands with specific thumb, finger, and hand techniques.`
    },
    {
        imageSrc: swedishImageSrc,
        heading: "Swedish Massage",
        content: `A gentle, relaxing and rhythmical, full body massage which increases the oxygen flow in the blood and 
        releases toxins from the muscles. Reducing emotional and physical stress, it stimulates the skin and soothes 
        the nervous system.`
    },
    {
        imageSrc: indianHeadMassageImageSrc,
        heading: "Indian Head Massage",
        content: `Practised in India for over a thousand years and brought to the west in the 1970's, Indian Head 
        Massage now includes the scalp, face, ears, neck, shoulders and upper arms.`
    },
    {
        imageSrc: stoneTherapyImageSrc,
        heading: "LA Stone Therapy",
        content: `Polished and smooth, water- heated Basalt (lava rocks) stones are used to apply pressure and heat to 
        the body. Stones coated in oil can also be used to deliver various massaging strokes.`
    },
    {
        imageSrc: pamperDaysImageSrc,
        heading: "Corporate Pamper Days",
        content: `Corporate Pamper Days are an excellent way to celebrate a milestone in your business or simply reward 
        your team! We can come to your premises and provide a range of treatments for you and your staff.`
    },
    {
        imageSrc: massageImageSrc,
        heading: "Peer-to-Peer Massages",
        content: `Our Peer-to-Peer Massage programme is aimed specifically at children aged 4-13 years.`
    }
];

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

                <section id="section--intro">
                    <AboutCard heading={heading} content={content} imageSrc={imageSrc} />
                </section>

                <hr className="section-separator"/>

                <section id="section--links">
                    <h2>Our Services</h2>

                    <div className="cards-container">
                        {cards.map((card, i) => {
                            const {imageSrc, heading, content} = card;
                            return (
                                <Card key={i} imageSrc={imageSrc} heading={heading} content={content}/>
                            )
                        })}
                    </div>
                </section>

            </main>
        </div>
    );
}

export default App;
