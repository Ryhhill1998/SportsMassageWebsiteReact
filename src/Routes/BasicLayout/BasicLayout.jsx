import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar.component";
import Footer from "../../Components/Footer/Footer.component";
import {DropdownSearchProvider} from "../../Contexts/DropdownSearch.context";

const BasicLayout = () => {
    return (
        <>
            <DropdownSearchProvider>
                <Navbar/>
            </DropdownSearchProvider>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default BasicLayout;