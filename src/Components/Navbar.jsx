import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../assets/assetsImage/user.png'
import logoMain from '../assets/assetsImage/Brand-logo.webp'
import { Authcontex } from '../Provider/AuthProvider';

const Navbar = () => {
   const {logOutUser,user} =useContext(Authcontex)
    return (
        <div className='flex justify-between items-center'>
            <div className="logo"><img src={logoMain} className='w-14 h-14 rounded-[50%]' alt="" /></div>
            <div className=" flex  gap-3">
                <NavLink className="text-[#706F6F]" to="/">Home</NavLink>
                <NavLink className="text-[#706F6F]" to="/">About</NavLink>
                <NavLink className="text-[#706F6F]" to="/">Career</NavLink>
            </div>
            <div className="profile flex items-center gap-2">
                <div><img src={user} alt="" /></div>
               {
                user && user?.email ?
               ( <button onClick={logOutUser} className='px-3 py-1 text-md text-white bg-[#403f3f]'>Logout</button>)
                :
                 (<Link to='/auth' className="px-3 py-1 text-md text-white bg-[#403f3f]">Login
                </Link>)
               }
            </div>
        </div>
    );
};

export default Navbar;