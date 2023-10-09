import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {  FcHome } from "react-icons/fc";

import { Link } from "react-router-dom";


const OwnerDashboard = () => {
    

    return (
        <div>
            <Helmet><title>Jewelry | Dashboard</title></Helmet>
            <div className=" pb-20 md:flex">

                <div className="drawer w-full md:w-1/3">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                    <div className="drawer-content md:text-center  mt-8  ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="text-white md:btn md:btn-primary drawer-button ">Menu</label>
                    </div>
                    <div className="md:drawer-side  ">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-white text-2xl text-blue-800 font-semibold">
                            
                                {/* Sidebar content here */}
                                <li><Link><AiFillHome/>Admin Home</Link></li>
                                <li><Link to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</Link></li>
                               
                                

                            

                          <li><Link to='/'>< FcHome/>Home</Link></li>
                            <li>
                                <Link to='/allJewelry' className=''>All Jewelry</Link>

                            </li>
                            <li><Link to='/addJewelry' className=''>Add Jewelry</Link></li>
                          
                            <li><Link to='/addedJewelry' className=''>Added Jewelry</Link></li>
                          
                            



                        </ul>

                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default OwnerDashboard;