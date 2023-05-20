import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { ToastContainer } from 'react-toastify';


const HomeLayout = () => {
    return (
        <div>
        <div className='sticky top-0 z-50'> 
        <Header/>
        </div>
        <div className='z-30'>
        <Outlet/>
        <Footer/>
        </div>
        <ToastContainer />
        </div>
    );
};

export default HomeLayout;