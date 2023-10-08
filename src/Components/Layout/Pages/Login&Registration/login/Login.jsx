import { Helmet } from "react-helmet-async";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import {AuthContext} from '../../../../Providers/AuthProviders'
// import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [Error,setError]=useState('');
const { register, handleSubmit,reset } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();

    let from=location.state?.from?.pathname || '/';

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const onSubmit = data => {
        
        const email =  data.email;
        const password =  data.password;
        console.log(email, password);
        signIn(email,password)
        .then((userCredential) => {
            // Signed in 
             const user = userCredential.user;
             console.log(user);
            
             reset();
            // Swal.fire({
            //     title: 'Login Successful!',
            //     showClass: {
            //       popup: 'animate__animated animate__fadeInDown'
            //     },
            //     hideClass: {
            //       popup: 'animate__animated animate__fadeOutUp'
            //     }
            //   });
              navigate(from,{replace:true});
            // ...
          })
          .catch(error=>{
             console.log(error)
            setError(error.message)
          })
          

    }


    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             setError('');

    //             navigate('/');
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })


    // }


    return (
        <div >
            <Helmet><title>Jewelry Shop | Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row mt-28 mb-20">
                    <div className=" text-center lg:text-left ">
                        <h1 className="text-3xl font-bold text-orange-700 mb-8">Login now!</h1>


                    </div>
                    <div className="card w-full  flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onSubmit) }className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" className="input input-bordered" placeholder="email"
                                    name="email" {...register("email", { required: true })}
                                    />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex"><input type={passwordVisible ? 'text' : 'password'} id="password" placeholder="password"
                                    name='password' className="input input-bordered"
                                    {...register("password")}
                                    />
                             
                                    <button className="text-xl ml-2" onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                    </button>
                                </div>
                                
                               
                            
                            </div>
                            <p className="text-red-600">{Error}</p>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <div>
                            <p className="text-orange-700 text-center mb-4">New Here? Create An <Link to='/register' className="font-bold text-xl">Account</Link></p>
                            {/* <p className="text-orange-700 text-center mb-4">Or sign in with <button className="btn btn-outline btn-primary pl-28 " onClick={handleGoogleSignIn}>Sign In with <p className='ml-2'><FaGoogle /></p>
                            </button></p>
                             */}
                            
                        </div>
                        <div className="card-body flex text-blue-700">
                           

                            
                           





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;