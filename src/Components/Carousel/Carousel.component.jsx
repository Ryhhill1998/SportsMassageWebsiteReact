import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import Slide from "./Slide/Slide.component";
import icon1 from "../../Images/icon1.png";
import icon2 from "../../Images/icon2.png";
import icon3 from "../../Images/icon3.png";

import "./Carousel.styles.css";

const slides = [
    {
        iconImageSrc: icon1,
        review: "Thank you for my fav massage. Highly recommended xxx",
        author: "Lindsey Burrows"
    },
    {
        iconImageSrc: icon2,
        review: "As always, a fantastic job! Feel relaxed and refreshed after my sports massage. Thank you so much x",
        author: "Emma Chambers"
    },
    {
        iconImageSrc: icon3,
        review: `Life saver!! At the moment can't walk, sit or move around stage without a great deal of pain. Decided 
        to get professional help in the form of deep tissue massage. Afterwards, I felt like a million dollars. Thought 
        that it might not last and the pain would return the next day but it didn't. Best decision I ever made...`,
        author: "Maggie Duguid"
    }
];

const Carousel = () => {
    return (
        <div className="carousel">
            <FontAwesomeIcon icon={faCircleChevronLeft} className="icon arrow arrow--left" />

            <div>
                {slides.map((slide, i) => {
                    const {iconImageSrc, review, author} = slide;
                    return <Slide key={i} iconImageSrc={iconImageSrc} review={review} author={author} i={i}/>
                })}
            </div>

            <FontAwesomeIcon icon={faCircleChevronRight} className="icon arrow arrow--right" />
        </div>
    );
}

export default Carousel;