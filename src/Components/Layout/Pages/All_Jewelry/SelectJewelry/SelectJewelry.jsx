import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
const SelectJewelry=()=>{
    const {user}=useContext(AuthContext)
    
    
    const { refetch, data: SJewelry=[] } = useQuery({
        queryKey: ['selectJewelry',user?.email],
        // enabled: !loading,
        queryFn: async () => {
            
           const response=await fetch(`http://localhost:1830/selectJewelry?email=${user?.email}`,{

            // header:{
            //     authorization:`bearer ${localStorage.getItem('access-token')}`
            // }

           })
           return response.data;
          },
      })
      return [SJewelry,refetch]

}
export default SelectJewelry;