import "./Overlay.styles.css";

import {useSelector, useDispatch} from "react-redux";
import {hideContactForm} from "../../features/contactForm/contactForm.js";

const Overlay = () => {

    const isContactFormVisible = useSelector(state => state.contactForm.visible);
    const dispatch = useDispatch();

    const handleOverlayClicked = () => dispatch(hideContactForm());

    return (
        <>
            {isContactFormVisible && <div onClick={handleOverlayClicked} className="overlay"></div>}
        </>
    );
}

export default Overlay;