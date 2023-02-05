import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight, faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

import Slide from "./Slide";

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

const TestimonialsSection = () => {
    return (
        <section id="section--testimonials">
            <h2>Testimonials</h2>

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
        </section>
    );
};

export default TestimonialsSection;