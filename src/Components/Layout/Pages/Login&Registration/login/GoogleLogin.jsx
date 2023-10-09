import { useContext} from "react";
import { Helmet } from "react-helmet-async";


import { Link, useLocation, useNavigate } from 'react-router-dom'



import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProviders";

const GoogleLogin = () => {
    const {  handleSubmit } = useForm();
    const navigate=useNavigate();
    const location=useLocation();
    const {signInWithGoogle}=useContext(AuthContext);
    let from=location.state?.from?.pathname || '/';



// Google Login
const handleGoogleLogin=()=>{
    
    signInWithGoogle()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role:"User" }
        fetch('http://localhost:1830/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
        



                navigate(from, { replace: true });
            })
    })

}






    return (
        <div >
            <Helmet><title>Jewelry Shop | Google Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row my-20">
                    <div className=" text-center lg:text-left ">
                        <h1 className="text-5xl font-bold">Login now!</h1>


                    </div>
                    <div className="card w-full  flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                   
                        <div>
                            <p className="text-blue-700 text-center mb-4">New Here? Create An <Link to='/register' className="font-bold text-xl">Account</Link></p>
                        </div>
                        <div>
                            <p className="text-center mb-8">Or sign in with</p>

                            <form   onSubmit={handleSubmit(handleGoogleLogin)}className="card-body">
                           
                            <div className="text-center ">
                                
                                <input type="submit" value='G'  className=" mx-auto  btn btn-outline btn-primary mb-8" />
                               
                            </div>
                            </form>
                           





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;