import "./StoneTherapy.css";

import stoneTherapyImageSrc from "../../Images/stoneTherapy.jpeg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "LA Stone Therapy",
    content: [
        `Hot stone massage combines the benefits of thermotherapy with massage strokes, creating a deeper and more 
        relaxing treatment.`,
        `Polished and smooth, water- heated Basalt (lava rocks) stones are used to apply pressure and heat to the body. 
        Stones coated in oil can also be used to deliver various massaging strokes. The stones are placed along the 
        client’s back; they help to retain heat which then deeply penetrates into the muscles.`,
    ],
    imageSrc: stoneTherapyImageSrc
};

const StoneTherapy = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default StoneTherapy;