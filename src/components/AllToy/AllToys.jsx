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
            <div className='grid mt-12 lg:grid-cols-3 pl-5 pr-5 gap-4'>
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
            </div>
        </div>
    );
};

export default AllToys;