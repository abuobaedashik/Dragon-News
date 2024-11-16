import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userimg from '../assets/assetsImage/user.png'
import logoMain from '../assets/assetsImage/Brand-logo.webp'
import { Authcontex } from '../Provider/AuthProvider';

const Navbar = () => {
    const {logOutUser,user} =useContext(Authcontex)
    const link = (
        <>
          <NavLink className='text-[#ffffff] bg-[#ff904d] rounded-sm px-3 text-base ' to="/">Home</NavLink>
          <NavLink   className={({ isActive }) =>
          isActive ? "text-[#ff904d] font-bold" : "text-gray-500"
        } to="/about">About</NavLink>
          <NavLink   className={({ isActive }) =>
          isActive ? "text-[#ff904d] font-bold" : "text-gray-500"
        } to="/all">News</NavLink>
          <NavLink   className={({ isActive }) =>
          isActive ? "text-[#ff904d] font-bold" : "text-gray-500"
        } to="/career">Career</NavLink>
          <NavLink   className={({ isActive }) =>
          isActive ? "text-[#ff904d] font-bold" : "text-gray-500"
        } to="/contact">Contact</NavLink>
        </>
      );
     
    return (
        <div className='flex justify-between flex-col md:flex-row items-center my-3'>
            {/* <div className="logo"><img src={logoMain} className='w-14 h-14 rounded-[50%]' alt="" /></div> */}
            <div className=" flex  gap-4 flex-col">
                {link}
            </div>
            <div className="profile flex items-center gap-2">
                {/* <div><img src={user} alt="" /></div> */}
                {
                user && user?.email ?
                (<div className='flex flex-col items-center justify-center mr-4'>
                    <img src={user?.photoURL} className='w-10 h-10 border object-cover border-[#403f3f] rounded-[50%]' alt="" />
                   <p className="text-sm font-semibold text-[#706F6F]">{user?.displayName}
                   </p>
                </div>)
                :
                 (<div><img src={userimg } alt="" /></div>)
               }
            </div>
        </div>
    );
};

export default Navbar;