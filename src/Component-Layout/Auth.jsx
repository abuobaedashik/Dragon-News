import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Auth = () => {
    return (
        <div className='font-Poppins bg-[#F3F3F3]'>
             <header className='py-6 mx-auto w-11/12'>
                 <Navbar></Navbar>
             </header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Auth;