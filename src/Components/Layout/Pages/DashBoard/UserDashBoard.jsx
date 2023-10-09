import { Helmet } from "react-helmet-async";


import {  FcHome } from "react-icons/fc";

import { Link} from "react-router-dom";


const UserDashboard = () => {
    

    return (
        <div>
            <Helmet><title>Jewelry Shop | User Dashboard</title></Helmet>
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
                           

                                
                               

                                   
                                    
                                    
                                       

                                  
                           
                         
                          <li><Link to='/'>< FcHome/>Home</Link></li>
                            
                            <li><Link to='/allJewelry' className=''>All Jewelry</Link></li>
                            <li><Link to='/MyJewelry' className=''>My Jewelry</Link></li>
                          
                            



                        </ul>

                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default UserDashboard;