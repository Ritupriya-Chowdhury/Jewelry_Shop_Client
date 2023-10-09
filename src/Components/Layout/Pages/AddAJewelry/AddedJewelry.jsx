import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {FaTrashAlt} from 'react-icons/fa'
import Swal from "sweetalert2";

const AddedJewelry = () => {
    const [addJewelry, setAddJewelry] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1830/addJewelry')
            .then(res => res.json())
            .then(data => setAddJewelry(data))
            .catch(error => console.error(error))

    }, [])

const handleDelete=(cla)=>{
    console.log(cla)
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
          fetch(`http://localhost:1830/addJewelry/${cla._id}`,{
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
            <Helmet><title>Owner | AddedJewelry</title></Helmet>
            <div className="pt-32">
                <h3 className="text-3xl font-semibold my-4 text-orange-700">Added Jewelry</h3>
                <div>
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-xl">
                                <th>#</th>
                                <th>Jewelry Name</th>
                                <th>Jewelry Image</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                              addJewelry.map((cla,index) => <tr className="text-lg" key={cla._id}>
                                    <th>{index + 1}</th>
                                    <td>{addJewelry.jewelryName}</td>
                                    <td>{addJewelry.jewelryImage}</td>
                                    <td>{addJewelry.price}</td>
                                    <td></td>
                                    <td><button onClick={() => handleDelete(cla)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddedJewelry;