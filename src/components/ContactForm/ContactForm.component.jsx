import "./ContactForm.styles.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import {useSelector, useDispatch} from "react-redux";
import {hideContactForm} from "../../features/contactForm/contactFormSlice.js";

const ContactForm = () => {

    const isContactFormVisible = useSelector(state => state.contactForm.visible);
    const dispatch = useDispatch();

    const handleCloseClicked = () => dispatch(hideContactForm());

    return (
        <>
            {isContactFormVisible &&
                <div className="contact-form">
                    <form action="https://formsubmit.co/rrsportsmassage@outlook.com" method="POST">
                        <div>
                            <h3>Contact Us</h3>
                            <div onClick={handleCloseClicked}>
                                <FontAwesomeIcon icon={faCircleXmark} className="close-button icon"/>
                            </div>
                        </div>

                        <div>
                            <label>
                                Name
                                <input type="text" name="name" required/>
                            </label>

                            <label>
                                Email
                                <input type="email" name="email" required/>
                            </label>

                            <label htmlFor="request-type">
                                Reason
                                <select id="request-type" name="reason" required>
                                    <option value="">Please select</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Query">Query</option>
                                </select>
                            </label>
                        </div>

                        <textarea placeholder="Type your message here" name="message" rows="5" required></textarea>
                        <button className="submit-button" type="submit">Send</button>
                    </form>
                </div>
            }
        </>
    );
}

export default ContactForm;