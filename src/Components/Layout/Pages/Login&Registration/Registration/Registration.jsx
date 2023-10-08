import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../../Providers/AuthProviders';
// import Swal from 'sweetalert2'

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        // Swal.fire({
                        //     position: 'top-end',
                        //     icon: 'success',
                        //     title: 'User created successfully.',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // });
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };

    const [passwordVisible, setPasswordVisible] = useState(false);
const [ConPasswordVisible, setConPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};
const toggleConPasswordVisibility = () => {
    setConPasswordVisible(!ConPasswordVisible);
};


return (
    <div>
        <Helmet><title>Jewelry Shop | Register</title></Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row my-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl text-orange-700 font-bold mt-28 ">Create An Account!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} name="name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex"> <input type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered"{...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" />

                                <button className="text-xl ml-2" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 Characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 Characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be have one upper case, one lower case & one special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className="flex"><input type={ConPasswordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered" name="confirmPassword" {...register("confirmPassword", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} />
                                <button className="text-xl ml-2" onClick={toggleConPasswordVisibility}>
                                    {ConPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button></div>
                            {errors.confirmPassword && <span className="text-red-600">Confirm Password is required</span>}
                            {errors.confirmPassword?.type === 'minLength' && <span className="text-red-600">Confirm Password must be 6 Characters</span>}
                            {errors.confirmPassword?.type === 'maxLength' && <span className="text-red-600">Confirm Password must be less then 20 Characters</span>}
                            {errors.confirmPassword?.type === 'pattern' && <span className="text-red-600">Password must be have one upper case, one lower case & one special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Upload a Photo" className="input input-bordered" name="photo" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-600">Photo is required</span>}
                        </div>
                        
                       
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Register' />
                        </div>
                    </form>
                    <div>
                        <p className="text-orange-700 text-center mb-4">Have An Account? Back to the  <Link to='/login' className="font-bold text-xl">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;