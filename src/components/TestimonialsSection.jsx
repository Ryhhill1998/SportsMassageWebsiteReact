import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight, faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const TestimonialsSection = () => {
    return (
        <section id="section--testimonials">
            <h2>Testimonials</h2>

            <div className="carousel">
                <FontAwesomeIcon icon={faCircleChevronLeft} className="icon arrow arrow--left" />

                <div>
                    <figure className="testimonial">
                        <div className="avatar-background">
                            <img className="avatar" src={icon1}/>
                        </div>

                        <p>
                            <span className="quotation-mark">"</span>
                            Thank you for my fav massage. Highly recommended xxx
                            <span className="quotation-mark">"</span>
                        </p>
                        <figcaption>Lindsey Burrows</figcaption>
                    </figure>

                    <figure className="testimonial hidden">
                        <div className="avatar-background">
                            <img className="avatar" src={icon2}/>
                        </div>
                        <p>
                            <span className="quotation-mark">"</span>
                            As always, a fantastic job! Feel relaxed and refreshed after my sports massage. Thank you so
                            much x
                            <span className="quotation-mark">"</span>
                        </p>
                        <figcaption>Emma Chambers</figcaption>
                    </figure>

                    <figure className="testimonial hidden">
                        <div className="avatar-background">
                            <img className="avatar" src={icon3}/>
                        </div>
                        <p>
                            <span className="quotation-mark">"</span>
                            Life saver!! At the moment can't walk, sit or move around stage without a great deal of
                            pain.
                            Decided to get professional help in the form of deep tissue massage. Afterwards, I felt like
                            a
                            million dollars. Thought that it might not last and the pain would return the next day but
                            it
                            didn't. Best decision I ever made...
                            <span className="quotation-mark">"</span>
                        </p>
                        <figcaption>Maggie Duguid</figcaption>
                    </figure>
                </div>

                <FontAwesomeIcon icon={faCircleChevronRight} className="icon arrow arrow--right" />
            </div>
        </section>
    );
};

export default TestimonialsSection;