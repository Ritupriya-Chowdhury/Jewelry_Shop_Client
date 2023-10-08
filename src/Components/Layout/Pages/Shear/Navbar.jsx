import logo from '../../../../assets/cover.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
             <div>
            {/*  */}
            <div className="navbar bg-orange-200 px-4 py-2 fixed z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-outline btn-error mr-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  bg-orange-300 text-orange-900 font-bold rounded-box w-52 ">
                            <li>
                            <Link to='/'>Home</Link>
                            </li>
                            <li>
                            <Link to='/'>All Jewelry</Link>
                            </li>
                            <li>
                            <Link to='/'> My Jewelry</Link>
                            </li>
                            <li>
                            <Link to='/'>Add Jewelry</Link>
                            </li>
                            <li>
                            <Link to='/'> Blogs</Link>
                            </li>
                            
                            

                        </ul>
                    </div>
                    <div className='flex'>
                        <div><img className=' h-20 w-72' src={logo} alt="" /></div>

                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end text-orange-700 navbar-center hidden lg:flex">

                        <div className='font-bold text-lg mr-2'>
                        <Link to='/' className='mr-4'>Home</Link>
                        <Link to='/' className='mr-4'>All_Jewelry</Link>
                        <Link to='/' className='mr-4'>My_Jewelry</Link>
                        <Link to='/' className='mr-4'>Add_Jewelry</Link>
                        <Link to='/' className='mr-4'>Blogs</Link>
                        
                             </div>
                    </div>

                    {/* { <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-8 lg:ml-2">

                            <div className="w-10 rounded-full ">
                                <img src="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                  {user.displayName}

                                </a>
                            </li>
                            <Link to='/dashboard' className='ml-3 uppercase'>Dashboard</Link>
                            <button className='w-16' onClick={handleLogout}>Logout</button>
                        </ul>
                    </div> : */}
                             <div className='font-bold text-lg ml-2 text-orange-700'>Login
                               </div>
                    
                   
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;