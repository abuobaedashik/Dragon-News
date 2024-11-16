import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userimg from '../assets/assetsImage/user.png'
import logoMain from '../assets/assetsImage/Brand-logo.webp'
import { Authcontex } from '../Provider/AuthProvider';

const Navbar = () => {
   const {logOutUser,user} =useContext(Authcontex)
    return (
        <div className='flex justify-between flex-col md:flex-row items-center my-3'>
            {/* <div className="logo"><img src={logoMain} className='w-14 h-14 rounded-[50%]' alt="" /></div> */}
            <div className=" flex  gap-4 ">
                <NavLink className="text-[#131313ac] font-semibold" to="/">Home</NavLink>
                <NavLink className="text-[#131313ac] font-semibold" to="/about">About</NavLink>
                <NavLink className="text-[#131313ac] font-semibold" to="/all">News</NavLink>
                <NavLink className="text-[#131313ac] font-semibold" to="/career">Career</NavLink>
                <NavLink className="text-[#131313ac] font-semibold" to="/contact">Contact</NavLink>
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