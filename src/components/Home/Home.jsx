import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from './Category';
import { ToastContainer } from 'react-toastify';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import Animation from './Animation';
import LearnMethod from './LearnMethod';


const Home = () => {
    DynamicTitle('Home')
    return (
        <>
            <Banner/>
            <Gallery/>
            <Category/>
            <Animation/>
            <LearnMethod/>
            <ToastContainer />
        </>
    );
};

export default Home;