import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import Slide from "./Slide/Slide.component";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";

import "./Carousel.styles.css";
import {useState} from "react";

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

    const [slideVisible, setSlideVisible] = useState(0);

    const rightArrowClickHandler = () => {
        setSlideVisible(slideVisible => {
            if (slideVisible === 2) {
                return 0;
            } else {
                return slideVisible + 1;
            }
        });
    }

    const leftArrowClickHandler = () => {
        setSlideVisible(slideVisible => {
            if (slideVisible === 0) {
                return 2;
            } else {
                return slideVisible - 1;
            }
        });
    }

    return (
        <div className="carousel">
            <FontAwesomeIcon
                icon={faCircleChevronLeft}
                onClick={leftArrowClickHandler}
                className="icon arrow arrow--left"
            />

            <div>
                {slides.map((slide, i) => (
                    <Slide key={i} {...slide} i={i} slideVisible={slideVisible} />
                ))}
            </div>

            <FontAwesomeIcon
                icon={faCircleChevronRight}
                onClick={rightArrowClickHandler}
                className="icon arrow arrow--right"
            />
        </div>
    );
}

export default Carousel;