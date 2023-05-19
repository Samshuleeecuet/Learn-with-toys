import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [toys,setAlltoys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy')
        .then(res=> res.json())
        .then(data=> setAlltoys(data))
    },[])
    //console.log(toys)
    return (
        <div>
            {/* <div className='grid mt-12 lg:grid-cols-3 pl-5 pr-5 gap-4'>
                {
                    toys?.map(toy=> 
                        <div className="card w-[450px] glass" key={toy?._id}>
                            <figure><img className='w-96 h-52' src={toy?.picture} alt="car!"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy?.name}</h2>
                                { toy?.seller_name && 
                                    <p>Seller: <span>{toy?.seller_name}</span></p>
                                }
                                <p>Category: {toy?.subcategory}</p>
                                <div className='flex'>
                                <p>Price: {toy?.price}</p>
                                <p>Available Quantity: {toy?.quantity}</p>
                                </div>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        
                        )
                }
            </div> */}


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
          <button className="btn">View Details</button>
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

export default AllToys;