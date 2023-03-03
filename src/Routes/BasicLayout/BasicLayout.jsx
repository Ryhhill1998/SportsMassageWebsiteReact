import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar.component";
import Footer from "../../Components/Footer/Footer.component";
import ContactForm from "../../Components/ContactForm/ContactForm.component";
import Overlay from "../../Components/Overlay/Overlay.component";

import {DropdownSearchProvider} from "../../Contexts/DropdownSearch.context";
import {ContactFormProvider} from "../../Contexts/ContactForm.context";

const BasicLayout = () => {

    return (
        <>
            <ContactFormProvider>
                <Overlay/>

                <ContactForm/>

                <DropdownSearchProvider>
                    <Navbar/>
                </DropdownSearchProvider>

                <Outlet/>

                <Footer/>
            </ContactFormProvider>
        </>
    );
}

export default BasicLayout;