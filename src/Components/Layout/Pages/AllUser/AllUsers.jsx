
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1830/users')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error(error))

    }, [])

    const handleDelete=(user)=>{
        console.log(user)
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
              fetch(`http://localhost:1830/users/${user._id}`,{
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
            <Helmet>
                <title>Jewelry Shop | All Users</title>
            </Helmet>
            <div className="pt-32">
                <h3 className="text-3xl font-semibold my-4">Total Users: {user.length}</h3>
                <div>
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-xl">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((user, index) => <tr className="text-lg" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                   
                                    
                               
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;