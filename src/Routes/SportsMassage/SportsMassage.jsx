import "./SportsMassage.css";

import sportsMassageImageSrc from "../../Images/sportsMassage.jpeg";
import About from "../../Components/AboutSection/About.component";

const cardInfo = {
    heading: "Sports Massage",
    content: [
        `Sports Massage combines advanced massage techniques, stretching exercises and aftercare advice for an 
        intensive treatment which is ideal for both adults and juniors who want to maintain and improve their athletic 
        performance.`,
        `An invigorating massage which manages, manipulates and rehabilitates soft body tissue using additional deeper 
        massage methods including Neuro-Muscular Technique and Trigger Point Therapy.`,
        `Used to prevent and rehabilitate various problems, including sports related injuries and improving posture 
        and relieving back pain by increasing flexibility and improving the suppleness of muscles and joints.`,
    ],
    imageSrc: sportsMassageImageSrc
};

const SportsMassage = () => {
    return (
        <main className="container">
            <About {...cardInfo} />
        </main>
    );
}

export default SportsMassage;