import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const AllToys = () => {
    const [toys,setAlltoys] = useState([])
    const {user} = useContext(AuthContext)
    DynamicTitle('AllToys')
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy')
        .then(res=> res.json())
        .then(data=> setAlltoys(data))
    },[])
    const OnToast = ()=>{
      if(!user){
          toast.error("You have to log in first to view details")
      }

  }
    //console.log(toys)
    return (
        <div>
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Seller Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View</th>
      </tr>
    </thead>
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
        <button onClick={OnToast} className="btn btn-primary" ><Link to ={`toy/${toy._id}`}>View Details</Link></button>
        </th>
      </tr>
        })
    }
      
    </tbody>
    
  </table>
</div>
<ToastContainer />
        </div>
    );
};

export default AllToys;