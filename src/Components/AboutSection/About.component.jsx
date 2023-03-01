import "./About.styles.css";

import ReadMore from "../ReadMore/ReadMore.component";

const AboutSection = ({heading, content, imageSrc}) => {
    return (
        <div className="about">
            <div className="content">
                <h2>{heading}</h2>

                <div className="description">
                    {content.map((entry, i) => <p key={`${heading}-${i}`}>{entry}</p>)}
                </div>
            </div>

            <div className="intro-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
        </div>
    );
};

export default AboutSection;