//import { Outlet } from "react-router-dom";
import Navbar from "../Shear/Navbar";
import Footer from "../Shear/Footer";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;