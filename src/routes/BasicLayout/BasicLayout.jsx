import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar.component";
import Footer from "../../components/Footer/Footer.component";
import ContactForm from "../../components/ContactForm/ContactForm.component";
import Overlay from "../../components/Overlay/Overlay.component";

import {ContactFormProvider} from "../../contexts/ContactForm.context";

const BasicLayout = () => {

    return (
        <>
            <ContactFormProvider>
                <Overlay/>

                <ContactForm/>

                <Navbar/>

                <Outlet/>

                <Footer/>
            </ContactFormProvider>
        </>
    );
}

export default BasicLayout;