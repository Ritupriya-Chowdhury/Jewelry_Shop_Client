import { Helmet } from "react-helmet-async";

import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";


const MyJewelry = () => {
    const { user } = useContext(AuthContext);

    

    const [jewelry, setJewelry] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:1830/selectJewelry?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJewelry(data))
            .catch(error => console.error(error))

    }, [])

// Delete Class
const handleDelete=(row)=>{
    console.log(row)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:1830/selectJewelry/${row}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
            if(data.deletedCount>0){
            
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })

}

    return (
        <div>
            <Helmet><title>Jewelry Shop | My Jewelry</title></Helmet>
            <div className="py-32">
                <p className="text-center font-bold my-8 text-3xl text-Orange-700">My Jewelry</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-xl text-black">
                            <tr>
                                <th>
                                   #
                                </th>
                              <th>Image</th>
                                <th>Jewelry Name</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                          { jewelry.map((row,index)=>
                             <tr key={row._id}>
                             <td>{index+1}</td>
                             <td>
                                 <div className=" items-center space-x-3">
                                     <div className="avatar">
                                         <div className="mask mask-squircle w-12 h-12">
                                             <img src={row.JImage} alt="Avatar Tailwind CSS Component" />
                                         </div>
                                     </div>
                                 </div>
                             </td>
                             <td className="text-xl text-orange-700 font-bold">
                                 {row.JName}
                                 
                             </td>
                            
                          <td  className="text-xl text-red-700 font-bold">{row.price}$</td>
                             
                             <td>
                                 <button className="btn btn-secondary btn-outline" onClick={()=>handleDelete(row._id)}><AiFillDelete/></button>
                             </td>
                         </tr>
                        
                            )}
                           
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyJewelry;