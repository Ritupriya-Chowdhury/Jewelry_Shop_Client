import { useEffect, useState } from "react";


const Jewelries = () => {

    const [jewelries, setJewelries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1830/jewelries')
            .then(res => res.json())
            .then(data => setJewelries(data))
            .catch(error => console.error(error))

    }, [])
    const [showAll, setShowAll] = useState(false);
    const allJewelries = showAll ? jewelries : jewelries.slice(0, 9);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className="pt-32 pb-20">
            <p className="mx-auto  pb-4 text-center text-4xl font-bold uppercase text-orange-700 border-b-2 border-orange-700 w-4/12 ">Our Jewelries</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allJewelries.map(jewelry =>
                        <div className="col mb-8 mt-16" key={jewelry._id}>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto border border-orange-700">
                                <figure className="px-10 pt-10">
                                    <img src={jewelry.jewelryImage} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-orange-700 text-2xl">{jewelry.jewelryName}</h2>
                                    <div className="flex mt-12 mb-4">
                                        <div className="text-orange-700 mr-20 text-xl font-bold">
                                       {jewelry.price}/=
                                        </div>
                                        <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>)
                }
            </div>
            {!showAll && (
                <div className="text-center">
                    <button className="btn  btn-outline btn-secondary my-8" onClick={handleShowAll}>Show All</button>
                </div>
            )}
        </div>


    );
};

export default Jewelries;