import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from './Category';
import { ToastContainer } from 'react-toastify';


const Home = () => {
    return (
        <>
            <Banner/>
            <Gallery/>
            <Category/>
            <ToastContainer />
        </>
    );
};

export default Home;