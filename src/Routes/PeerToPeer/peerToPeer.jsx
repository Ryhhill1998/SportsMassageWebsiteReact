import "./peerToPeer.css";

import peerToPeerImageSrc from "../../Images/massage.jpeg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "Peer-to-Peer Massage",
    content: [
        `The massage routine is taught in two parts, so the class can practise the techniques in between sessions and 
        we can check that the techniques are being performed correctly.`,
        `In Reception, Year 1 and Year 2, the routine uses the story of The Gruffalo to help the children better 
        engage with the techniques and have fun along the way.`,
    ],
    imageSrc: peerToPeerImageSrc
};

const PeerToPeer = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default PeerToPeer;