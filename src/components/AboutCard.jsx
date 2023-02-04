import {useState} from "react";

const AboutCard = ({heading, content, imageSrc}) => {
    let count = 0;

    const mapFunction = (entry) => {
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

        return <p>{reducedEntry}</p>
    }

    return (
        <div className="about">
            <div className="content">
                <h2>{heading}</h2>

                <div className="description">
                    {content.map(entry => mapFunction(entry))}
                </div>

                <p className="read-more">
                    Read more
                </p>
            </div>

            <div className="intro-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
        </div>
    );
};

export default AboutCard;