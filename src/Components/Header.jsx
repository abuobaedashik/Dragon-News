import React from 'react';
import logo from '../assets/assetsImage/logo.png'
import moment from 'moment';
const Header = () => {
    return (
            <div className="flex flex-col  items-center py-2 gap-2">
                 <div className="mt-6 ">
                    <img src={logo} className="w-[300px]"  />
                 </div>
                 <h1 className="text-gray-400 ">Journalism Without Fear or Favour</h1>
                 <h1 className=" text-[#131313c0]">{moment().format("dddd, MMMM Do YYYY")}</h1>
            </div>
    );
};

export default Header;