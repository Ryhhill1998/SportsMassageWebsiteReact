import "./acupuncture.css";

import acupunctureImageSrc from "../../Images/acupuncture.jpg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "Acupuncture",
    content: [
        `Medical Acupuncture, often called ‘Dry Needling’, is generally used to help muscle and joint problems. Needles 
        are inserted at various sites in the body for preventative or therapeutic purposes.`,
        `It involves stimulating sensory nerves under the skin and in the muscles. This results in pain relieving 
        endorphins, natural substances being produced by the body. It is based on the belief that an energy, known as 
        Qi, flows through the channels in the body called meridians.`,
        `Practitioners use acupuncture to treat a range of conditions including chronic pain, headaches, migraines, 
        joint problems and dental pain.`
    ],
    imageSrc: acupunctureImageSrc
};

const Acupuncture = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default Acupuncture;