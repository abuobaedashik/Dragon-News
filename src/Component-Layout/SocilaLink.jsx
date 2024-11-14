import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const SocilaLink = () => {
  return (
      <div className="join join-vertical flex bg-base-100">
        <button className="btn join-item flex items-center justify-start gap-3"><FaFacebook /> Facebook</button>
        <button className="btn join-item flex items-center justify-start gap-3"><FaTwitter /> Twitter</button>
        <button className="btn join-item flex items-center justify-start gap-3"><FaSquareInstagram /> Instagram</button>
      </div>
  );
};

export default SocilaLink;
