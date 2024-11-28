import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontex } from "../Provider/AuthProvider";

const Register = () => {
   const {createUser,setuser,updateUserProfile}=useContext(Authcontex)
   const navigate =useNavigate()
   const [error,seterror]=useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
       const form =new FormData (e.target)
       const name =form.get("name")
       if (name.length <5) {
        seterror({...error,name:"Name must be 5 cheracter long"})
        return;
       }
       const email =form.get("email")
       const  photo =form.get("photo")
       const password =form.get("password")
      //  console.log({name,photo,email,password});
       createUser(email,password)
       .then((result)=>{
          const user =result.user;
          setuser(user)
          // console.log(user);
          updateUserProfile({displayName:name,photoURL:photo})
          .then(()=>{
            navigate("/")
          }).catch((error)=>alert(error))
       })
       .catch((err) => {
        seterror({...error, register:err.code})
      })
    }
    useEffect(() => {
      document.title = "News | Register";
    }, [])
    return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
        <h1 className="text-xl font-bold text-center">Register your account</h1>
        <form onSubmit={handleSubmit} className="card-body mb-0 pb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input rounded-md bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
          {
              error.name && 
              <label className="label text-xs text-red-500">
                {error.name}
             </label>
            }

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input rounded-md bg-[#F3F3F3] input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input rounded-md bg-[#F3F3F3] input-bordered"
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
              className="input rounded-md bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
           {
              error.register && 
              <label className="label text-xs text-red-500">
                {error.register}
             </label>
            }
          <div className="form-control mt-3">
            <button className="btn btn-accent bg-[#403F3F] text-[#ffffff] rounded-none">
              Register
            </button>
          </div>
        </form>
        <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">
          Already You Have an Account ?
          <Link to="/auth/" className="text-sm font-normal text-[#FF8C47]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
