import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex items-center lg:w-5/6 font-serif'>
            <div className='flex-grow text-center md:pt-5'>
                <h2 className='font-extrabold text-5xl'>Let's Start</h2>
                <p className='font-semibold'>Show your creativity</p>
            </div>
            <div>
        <img className='w-96' src="https://i.ibb.co/GkD6kMs/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;