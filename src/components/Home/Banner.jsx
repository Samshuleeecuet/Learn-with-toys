import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
    return (
        <div className='lg:flex items-center lg:w-5/6'>
            <div className='flex-grow text-center md:pt-5'>
                <h2 className='font-extrabold text-5xl'>Let's Start</h2>
                <p className='font-semibold'>Show your creativity</p>
            </div>
            <div>
            <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_Mr2XfXxSpQ.json"
        style={{ height: '500px', width: '400px' }}
        >
        </Player>
            </div>
        </div>
    );
};

export default Banner;