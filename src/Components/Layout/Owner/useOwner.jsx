import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";



const useOwner = () => {
    const { user,loading} = useContext(AuthContext);
   
    const { data: isOwner, isLoading: isOwnerLoading } = useQuery({
        queryKey: ['isOwner',user?.email],
        enabled: !loading,
        queryFn: async () => {
            
            const response=await fetch(`http://localhost:1830/users/owner/${user?.email}`,{
 
             // header:{
             //     authorization:`bearer ${localStorage.getItem('access-token')}`
             // }
 
            })
            return response.data;
           },
    })
    return [isOwner, isOwnerLoading]
}
export default useOwner;