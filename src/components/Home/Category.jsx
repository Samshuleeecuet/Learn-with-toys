import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {  Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
    const [category,setCategory] = useState('science-kit')
    const {user} = useContext(AuthContext)
    const [toys,setAlltoys] = useState([])
    const navigate = useNavigate()
    const handleCategory = (value)=>{
        setCategory(value)
    }
    const OnToast = ()=>{
        if(!user){
            toast.error("You have to log in first to view details")
        }
        
    }

    
    useEffect(()=>{
        fetch(`http://localhost:5000/alltoy/${category}`)
        .then(res=> res.json())
        .then(data=> setAlltoys(data))
    },[category])
    const categories = <>
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
                                {/* <Link to ={`alltoys/${toy._id}`}  ><button onClick={OnToast} className="btn btn-primary" >View Details</button></Link> */}
                                <button onClick={OnToast} className="btn btn-primary" ><Link to ={`toy/${toy._id}`}>View Details</Link></button>
                                </div>
                            </div>
                            
                        </div>
                        
                        )
                }
                
            </div> 
            
    
    </>


    return (
        <div className='font-serif mt-12'>
            <div>
                <p className='text-center text-2xl font-bold'>Educational and Learning Toys</p>
                <p className='text-center text-xl pt-5'>Categories</p>
            </div>
            <div>
            <Tabs>
                <TabList className='text-center'>
                <Tab onClick={()=>handleCategory('science-kit')}>Science kits</Tab>
                <Tab onClick={()=>handleCategory('math-learning-toys')}>Math Learning Toys</Tab>
                <Tab onClick={()=>handleCategory('engineering-kits')}>Engineering kits</Tab>
                </TabList>

                <TabPanel className='border-t-2'>
                {categories}
                </TabPanel>
                <TabPanel>
                {categories}
                </TabPanel>
                <TabPanel>
                {categories}
                </TabPanel>
            </Tabs>
            <ToastContainer />
            </div>
           
        </div>
    );
};

export default Category;