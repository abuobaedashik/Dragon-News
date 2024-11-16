import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Authcontex } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const TopHeader = () => {
  const { logOutUser, user } = useContext(Authcontex);
  return (
    <div className=" py-3 bg-[#303C4D] text-[#8CA9B8]">
      <div className="mx-auto w-11/12 flex items-center justify-between">
        <div className="text-sm flex items-center gap-3">
          <FaGithub></FaGithub>
          <FaGoogle></FaGoogle>
          <FaInstagram></FaInstagram>
          <FaTwitter />
        </div>
        <div className="flex items-center gap-4">
          {user && user?.email ? (
            <button
              onClick={logOutUser}
              className="px-3 py-1 text-md text-white bg-[#403f3f]"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/auth"
              className="px-3 py-1 text-md text-white bg-[#403f3f]"
            >
              Login
            </NavLink>
          )}
          <NavLink to="/auth/register" className="text-sm">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
