import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginBtn = () => {
  return (
    <div className="mt-3 text-sm flex flex-col gap-3">
      <button className="font-normal border-blue-500 border-2 flex justify-center rounded-md items-center gap-3 text-blue-500 px-3 py-1">
        <FaGoogle></FaGoogle>
        Login With Google
      </button>
      <button className="font-normal border-2 text-[#131313] border-[#131313a0] px-3 gap-3 justify-center rounded-md  py-1 flex items-center">
        <FaGithub /> Login With Github
      </button>
    </div>
  );
};

export default LoginBtn;
