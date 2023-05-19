import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

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
        </div>
    );
};

export default HomeLayout;