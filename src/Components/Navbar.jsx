import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/assetsImage/user.png'
import logoMain from '../assets/assetsImage/Brand-logo.webp'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="logo"><img src={logoMain} className='w-14 h-14 rounded-[50%]' alt="" /></div>
            <div className="menu flex items-center gap-3">
                <NavLink className="text-[#706F6F]" to="/">Home</NavLink>
                <NavLink className="text-[#706F6F]" to="/">About</NavLink>
                <NavLink className="text-[#706F6F]" to="/">Career</NavLink>
            </div>
            <div className="profile flex items-center gap-2">
                <div><img src={user} alt="" /></div>
                <button className="px-3 py-1 text-md text-white bg-[#403f3f]">Login</button>
            </div>
        </div>
    );
};

export default Navbar;