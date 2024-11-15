import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const NewsCard = ({ everyNews }) => {
  const {_id,author,img,thumbnail_url,details,total_view,rating,title} = everyNews;
  // const handleReadMone=()=>{
  //   return alert("Login First to access This Page")
  // }
  return (
    <div className="my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-4">
    <div className="upparnav flex justify-between items-center py-4 px-0">
     <div className="flex items-center ">
      <img
        className="w-10 h-10 rounded-full"
        src={author.img}
        alt="Author"
      />
      <div className="ml-4 ">
        <h2 className="text-sm font-semibold text-gray-900">{author?.name}</h2>
        <p className="text-xs text-gray-500">{author?.published_date}</p>
      </div>
     </div>
      <div className="icons flex items-center gap-4">
        <p className="text-md"><IoMdShare></IoMdShare></p>
        <p className="text-md"><FaRegBookmark></FaRegBookmark></p>
      </div>
    </div>
   <div className="mx-auto">
   <img
      className="w-full h-[350px] rounded-md object-center"
      src={thumbnail_url}
      alt="News Thumbnail"
    />
   </div>

    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500 mt-2 text-justify">
        {details.slice(0, 130)}...
      </p>
      <NavLink to={`/news/${_id}`}  className="text-[#FF8C47] text-left text-sm mt-2 block">Read More</NavLink>
    </div>

    <div className="p-4 border-t border-gray-200 flex items-center justify-between text-gray-600">
      <div className="flex items-center space-x-1">
        <FaStar className="text-yellow-400" />
        <p className="text-sm font-semibold">{rating.number}</p>
      </div>
      <div className="flex items-center space-x-2">
        <AiOutlineEye />
        <p className="text-sm">{total_view}</p>
      </div>
    </div>
  </div>

  );
};

export default NewsCard;
