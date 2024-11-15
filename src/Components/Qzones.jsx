import React from 'react';
import Swim from '../assets/assetsImage/swimming.png'
import School from '../assets/assetsImage/class.png'
import PlayGround from '../assets/assetsImage/playground.png'
import Play from '../assets/assetsImage/play.webp'
import ad from '../assets/assetsImage/bg.png'

const Qzones = () => {
    return (
       <div className='mt-6 flex items-center gap-3 flex-col'>
         {/* <div className='bg-[#F3F3F3] flex items-center gap-3 flex-col'>
            <p className="text-2xl font-semibold pt-3 items-start text-left text-[#131313c1] px-3">Q-Zone</p>
            <div className="my-8">
                <img src={Swim} alt="Swim" />
            </div>
            <div className="my-8">
                <img src={School} alt="class" />
            </div>
            <div className="my-8">
                <img src={PlayGround} alt="class" />
            </div>
            <div className="my-8">
                <img src={Play} className='w-[230px]' alt="class" />
            </div>
        </div> */}
        <div className='mt-6 bg-[#F3F3F3] flex items-center gap-3 flex-col'>
            <p className="text-2xl font-semibold pt-3 items-start text-left text-[#131313c1] px-3">Q-Zone</p>
            <div className="my-8">
                <img src={Swim} alt="Swim" />
            </div>
            <div className="my-8">
                <img src={School} alt="class" />
            </div>
            <div className="my-8">
                <img src={PlayGround} alt="class" />
            </div>
            <div className="my-8">
                <img src={Play} className='w-[230px]' alt="class" />
            </div>
        </div>
        <div className="my-8">
              <img src={ad} alt="" />
           </div>
       </div>
    );
};

export default Qzones;