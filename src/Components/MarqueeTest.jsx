import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { Authcontex } from '../Provider/AuthProvider';
import MarqueCard from './MarqueCard';

const MarqueeTest = () => {
   const {allnews}=useContext(Authcontex)
    return (
        <div className='flex items-center justify-center  w-full'>
           <Marquee pauseOnHover className=' w-full'>
                {
                    allnews.map(everynews=><MarqueCard key={everynews._id} everynews={everynews}></MarqueCard>)
                }
           </Marquee>
        </div>
    );
};

export default MarqueeTest;