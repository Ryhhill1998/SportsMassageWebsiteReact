import "./AboutSection.styles.css";

import ReadMore from "../ReadMore/ReadMore.component";

const AboutSection = ({heading, content, imageSrc}) => {
    let count = 0;

    const mapFunction = (entry, i) => {
        const words = entry.split(" ");
        let reducedEntry = "";

        for (let i = 0; i < words.length; i++) {
            if (count === 100) break;

            let word = words[i];
            count++;

            if (count === 100) {
                word = word.slice(0, word.length - 1);
                reducedEntry += " " + word + "...";
            } else {
                reducedEntry += " " + word;
            }
        }

        return <p key={i}>{reducedEntry}</p>
    }

    return (
        <section id="section--intro">
            <div className="about">
                <div className="content">
                    <h2>{heading}</h2>

                    <div className="description">
                        {content.map((entry, i) => mapFunction(entry, i))}
                    </div>

                    <ReadMore/>
                </div>

                <div className="intro-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
            </div>
        </section>
    );
};

export default AboutSection;