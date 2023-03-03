import "./ContactForm.styles.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark as regularClose} from "@fortawesome/free-regular-svg-icons";
import {faCircleXmark as solidClose} from "@fortawesome/free-solid-svg-icons";

import {useContext, useState} from "react";
import {ContactFormContext} from "../../Contexts/ContactForm.context";

const ContactForm = () => {

    const [closeHoveredOver, setCloseHoveredOver] = useState(false);
    const {contactFormOpen, setContactFormOpen} = useContext(ContactFormContext);

    const handleMouseOverCloseButton = () => setCloseHoveredOver(true);
    const handleMouseLeaveCloseButton = () => setCloseHoveredOver(false);

    const handleCloseClicked = () => setContactFormOpen(false);

    return (
        <>
            {contactFormOpen &&
                <div className="contact-form">
                    <form action="https://formsubmit.co/rrsportsmassage@outlook.com" method="POST">
                        <div>
                            <h3>Contact Us</h3>
                            <div
                                onMouseEnter={handleMouseOverCloseButton}
                                onMouseLeave={handleMouseLeaveCloseButton}
                                onClick={handleCloseClicked}
                            >
                                {!closeHoveredOver && <FontAwesomeIcon icon={regularClose} className="close-button icon"/>}
                                {closeHoveredOver && <FontAwesomeIcon icon={solidClose} className="close-button icon"/>}
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