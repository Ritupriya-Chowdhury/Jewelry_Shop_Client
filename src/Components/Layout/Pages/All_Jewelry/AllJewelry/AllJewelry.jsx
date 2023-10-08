import { Helmet } from "react-helmet-async";
import Jewelries from "../Jewelries/Jewelries";


const AllJewelry = () => {
    return (
        <div>
             <Helmet>
                <title>Jewelry Shop | AllJewelry</title>
            </Helmet>
            <Jewelries></Jewelries>
        </div>
    );
};

export default AllJewelry;