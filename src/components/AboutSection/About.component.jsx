import "./About.styles.css";

import ReadMore from "../ReadMore/ReadMore.component";

const AboutSection = ({heading, content, imageSrc}) => {
    return (
        <div className="about">
            <div className="content">
                <h2>{heading}</h2>

                <div className="description">
                    {content.map(entry => <p>{entry}</p>)}
                </div>

                <ReadMore/>
            </div>

            <div className="intro-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
        </div>
    );
};

export default AboutSection;