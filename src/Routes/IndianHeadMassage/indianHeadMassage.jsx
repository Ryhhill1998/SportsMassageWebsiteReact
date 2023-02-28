import "./indianHeadMassage.css";

import indianHeadMassageImageSrc from "../../Images/indianHeadMassage.jpeg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "Indian Head Massage",
    content: [
        `Practised in India for over a thousand years and brought to the west in the 1970's, Indian Head Massage now 
        includes the scalp, face, ears, neck, shoulders and upper arms.`,
        `A thorough massage of the scalp improves circulation and relieves headaches. Next, the face, ears, neck, 
        shoulder and finally, upper arms are massaged, releasing stress and tension which has accumulated in the 
        tissues, muscles and joints.`,
        `Indian Head Massage is a deeply calming treatment that will leave you feeling energised and revitalised.`
    ],
    imageSrc: indianHeadMassageImageSrc
};

const IndianHeadMassage = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default IndianHeadMassage;