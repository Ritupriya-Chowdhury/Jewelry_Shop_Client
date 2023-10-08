import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const Profile = () => {
    const { user} = useContext(AuthContext)
    return (
        <div className="card w-96 bg-base-100 shadow-xl py-36 mx-auto">
        <figure className="px-10 pt-10">
          <img src=""   className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-orange-700">{user.displayName}</h2>

         < h2 className="card-title text-orange-700">{user.email}</h2>
         
        </div>
      </div>
    );
};

export default Profile;