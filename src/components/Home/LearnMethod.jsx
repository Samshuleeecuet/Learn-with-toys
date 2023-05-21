import React from 'react';
import { Player} from '@lottiefiles/react-lottie-player';

const LearnMethod = () => {
    return (
        <div className='mt-20'>
            <div className='text-center text-3xl mb-5 font-bold'>
                <p>Learning Method & Techniques</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center'>
                <div>
                    <p className='font-bold text-2xl'>Read More and More</p>
                    <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_uPKZ69ixvZ.json"
                        style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Blended Learning</p>
                    <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_gjomm2fu.json"
                        style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Distance Learning</p>
                    <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_mftk4sdv.json"
                        style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-2xl'>Thinking Learning</p>
                    <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_4nkdwted.json"
                        style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMethod;