import React, { useContext } from 'react';
import { Authcontex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRotue = ({children}) => {
    const {user,loading}=useContext(Authcontex)
    const location =useLocation()
    // console.log(location);
   if (loading ) {
    return <div>
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-4xl"></span> 
        </div>
    </div>
   }
   if (user && user?.email ) {
    return children
   }
    return <Navigate state={location.pathname} to={'/auth'}></Navigate>;
};

export default PrivateRotue;