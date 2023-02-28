import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar.component";
import Footer from "../../Components/Footer/Footer.component";

const BasicLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default BasicLayout;