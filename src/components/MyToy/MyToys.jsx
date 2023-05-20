import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const [email,setEmail] = useState(user.email)
    const [toys,setMytoys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${email}`)
        .then(res=> res.json())
        .then(data=> setMytoys(data))
    },[email])

    const tablehead = <>
        <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Seller Name</th>
                    <th>Sub-Category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
    </>
    const sweetalert = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Update!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
              Swal.fire(
                'Update!',
                'Your file has been Updated.',
                'success'
              )
            }
          })
    }
    const handleUpdate = (id)=>{
        navigate(`/update/${id}`)
    }
    const handleDelete = (id)=>{
        console.log('Delete',id)
    }
    return (
        <div>
            
             <div className="overflow-x-auto w-full">
               
                    <table className="table w-full">
                {tablehead}
                <tbody>
                {
                    toys?.map(toy=>{
                    return <tr key={toy?._id}>
                        
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                        <img src={toy?.picture}/>
                        </div>
                        </div>
                    </div>
                    </td>
                    <td>
                    {toy?.name}
                    </td>
                    <td>
                    {toy?.seller_name}
                    </td>
                    <td>{toy?.subcategory}</td>
                    <td> {toy?.price}</td>
                    <td>{toy?.quantity}</td>
                    <th>
                    <button onClick={()=>handleUpdate(toy._id)} className="btn btn-info">Update</button>
                    </th>
                    <th>
                    <button onClick={()=>handleDelete(toy._id)} className="btn btn-warning">Delete</button>
                    </th>
                </tr>
                    })
                }
                </tbody>
            </table>
                
            </div>

            
        </div>
    );
};

export default MyToys;