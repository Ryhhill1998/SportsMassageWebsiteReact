import "./SwedishMassage.css";

import swedishMassageImageSrc from "../../Images/swedishMassage.jpeg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "Swedish Massage",
    content: [
        `A gentle, relaxing and rhythmical, full body massage which increases the oxygen flow in the blood and 
        releases toxins from the muscles. Reducing emotional and physical stress, it stimulates the skin and soothes 
        the nervous system.`,
        `Swedish massage has been shown to help with reducing pain and muscle tension, relaxing soft body tissue and 
        loosening stiff joints, improving function in patients with osteoarthritis and facilitating healing.`,
    ],
    imageSrc: swedishMassageImageSrc
};

const SwedishMassage = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default SwedishMassage;