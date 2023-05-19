import React from 'react';
import Home from '../components/Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const HomeLayout = () => {
    return (
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default HomeLayout;