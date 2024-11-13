import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTest = () => {
    return (
        <div className='flex items-center justify-center bg-[#F3F3F3] px-3 py-4  '>
            <div className="text-md text-[#ffffff] bg-[#D72050] px-2 py-1 mx-3 my-1">
                Latest
           </div>
           <Marquee pauseOnHover className='space-x-3 '>
            <span className='mx-6'> Match Highlights: Germany vs Spain — as it happened   </span>! <span className='mx-6'> Braking News</span>
            <span className='mx-6'> Match Highlights: Germany vs Spain — as it happened   </span>! <span className='mx-6'> Braking News</span>
           </Marquee>
        </div>
    );
};

export default MarqueeTest;