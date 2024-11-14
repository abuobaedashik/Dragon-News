
import LoginBtn from "../Components/LoginBtn";
import SocilaLink from "./SocilaLink";
const LoginSection = () => {
    return (
        <div>
            <p className='text-lg font-medium text-left text-[#403F3F]'>Login With</p>
             <div className="mt-2"><LoginBtn></LoginBtn></div>
             <p className='text-lg mt-6 text-left font-medium text-[#403F3F]'>Find Us On</p>
             <div className="mt-2 w-full"><SocilaLink></SocilaLink></div>
        </div>
    );
};

export default LoginSection;