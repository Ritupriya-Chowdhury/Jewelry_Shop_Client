import logo from '../../../../assets/cover.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, SignOut } = useContext(AuthContext)


    const handleLogout = () => {
        SignOut()
            .then(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Account Successfully Logout!',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .catch(error => console.error(error.message))


    }


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
                            <Link to='/allJewelry'>All Jewelry</Link>
                            </li>
                            <li>
                            <Link to='/'> My Jewelry</Link>
                            </li>
                            <li>
                            <Link to='/addjewelry'>Add Jewelry</Link>
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
                    <div className="dropdown dropdown-end  navbar-center hidden lg:flex">

                        <div className='font-bold text-lg mr-2'>
                        <Link to='/' className='mr-4 text-orange-700 hover:text-orange-500'>Home</Link>
                        <Link to='/allJewelry' className='mr-4 text-orange-700 hover:text-orange-500'>All_Jewelry</Link>
                        <Link to='/' className='mr-4 text-orange-700 hover:text-orange-500'>My_Jewelry</Link>
                        <Link to='/addjewelry' className='mr-4 text-orange-700 hover:text-orange-500'>Add_Jewelry</Link>
                        <Link to='/' className='mr-4 text-orange-700 hover:text-orange-500'>Blogs</Link>
                        
                             </div>
                    </div>

                    {user ?   <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-8 lg:ml-2">

                            <div className="w-10 rounded-full ">
                            <img src={user.photoUrl} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                            <Link to='/dashboard' className='ml-3 uppercase'>Dashboard</Link>
                            <Link to='/profile' className='ml-2 text-orange-700 hover:text-orange-500'> {user.displayName}</Link>
                            <button className='w-16 text-orange-700 hover:text-orange-500 ' onClick={handleLogout}>Logout</button>
                        </ul>
                    </div> :
                             <Link to='/login' className='font-bold text-lg  text-orange-700 hover:text-orange-500'>Login
                               </Link>
}
                    
                   
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;