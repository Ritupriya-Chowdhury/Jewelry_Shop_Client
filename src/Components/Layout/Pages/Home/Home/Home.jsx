
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Reviewers from "../Reviewers/Reviewers";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Jewelry Shop | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
             <Reviewers></Reviewers>
        </div>
    );
};

export default Home;