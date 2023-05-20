import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id} = useParams();
    const [toy,setToy] = useState([])
    const {name,picture,description,price,quantity,rating,seller_name,email} = toy || {}
    useEffect(()=>{
        fetch(`http://localhost:5000/viewtoys/${id}`)
        .then(res=> res.json())
        .then(data=> {
            data.map(t=> setToy(t))
        })
    },[id])
    console.log(toy)
    return (
        <div>
            ViewDetails of {id}
        </div>
    );
};

export default ViewDetails;