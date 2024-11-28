import React from "react";
import { NavLink } from "react-router-dom";

const MarqueCard = ({ everynews }) => {
  const { title, author, image_url, total_view ,rating,_id} = everynews;
  return (
    <div className=" px-4 text-[#131313] w-[500px]">
      <div className=" flex items-center border-red-400 h-[200px] justify-between gap-4 ">
        <div className="img ">
          <img
            src={image_url}
            className="w-[210px] h-[140px] object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="justify-center h-[140px] flex flex-col ">
            <p className="text-base  font-bold">{title}</p>
            <p className="text-sm  font-medium">View: {total_view}</p>
            <p className="text-xs mt-1">{author.published_date}</p>
            <div className="rating static w-20 h-20 text-base">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 "
              />
              <span className="num text-base text-[#131313b2] ml-3">{rating.number}</span>
            </div>
            <NavLink to={`/news/${_id}`} className="btn-xs w-20 rounded-sm bg-blue-700"> Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MarqueCard;
