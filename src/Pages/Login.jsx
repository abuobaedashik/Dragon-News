import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontex } from "../Provider/AuthProvider";

const Login = () => {
   const {SignInUser,setuser} =useContext(Authcontex)
   const [error,seterror]=useState({})
   const location =useLocation()
   const navigate =useNavigate()
    // console.log(location);
    const handleLogIn=(e)=>{
     e.preventDefault();
     const form = e.target
     const email = form.email.value
     const password = form.password.value
    //  console.log({email,password});
     SignInUser(email,password)
     .then(result=>{
        const user =result.user
        setuser(user)
        navigate(location?.state ? location.state : "/")
     })
     .catch(err=>{
        seterror({...error, login:err.code})
     })
   }
   useEffect(() => {
    document.title = "News | Login";
  }, [])
    return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
        <h1 className="text-xl font-bold text-center">
            Login Your Account
        </h1>
        <form onSubmit={handleLogIn} className="card-body mb-0 pb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input rounded-md bg-[#F3F3F3] border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input rounded-md bg-[#F3F3F3] border-none "
              required
            />
            {
              error.login && 
              <label className="label text-xs text-red-500">
                {error.login}
             </label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-accent bg-[#403F3F] text-[#ffffff] rounded-none">Login</button>
          </div>
        </form>
        <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">Don't Have an Account ? <Link to='/auth/register' className="text-sm font-normal text-[#FF8C47]">Register</Link></div>
      </div>
    </div>
  );
};

export default Login;
