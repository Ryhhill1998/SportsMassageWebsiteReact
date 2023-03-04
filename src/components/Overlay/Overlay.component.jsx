import "./Overlay.styles.css";
import {useContext} from "react";
import {ContactFormContext} from "../../contexts/ContactForm.context";

const Overlay = () => {

    const {contactFormOpen, setContactFormOpen} = useContext(ContactFormContext);

    const handleOverlayClicked = () => setContactFormOpen(false);

    return (
        <>
            {contactFormOpen && <div onClick={handleOverlayClicked} className="overlay"></div>}
        </>
    );
}

export default Overlay;