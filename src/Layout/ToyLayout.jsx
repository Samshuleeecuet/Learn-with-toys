import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const ToyLayout = () => {
    return (
        <div>
        <div className='sticky top-0 z-50'> 
        <Header/>
        </div>
        <div className='z-30'>
        <Outlet/>
        <Footer/>
        </div>
        </div>
    );
};

export default ToyLayout;