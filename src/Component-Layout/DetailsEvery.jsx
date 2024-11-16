import React from "react";
import { Link } from "react-router-dom";

const DetailsEvery = ({ newsDtls }) => {
  return (
    <div className="text-lg font-medium text-[#403F3F] ">
      <p className="mx-auto text-2xl mb-4 ml-10 mt-3 text-center font-bold">Details News</p>
      <div className=" mb-3 p-4 w-11/12 mx-auto px-6 pb-20 border">
        <p className="mt-2">
          <img
            className="w-full object-cover"
            src={newsDtls.image_url}
            alt="image"
          />
        </p>
        <p className="text-3xl font-bold text-[#403F3F] my-5 ">
          {newsDtls.title}
        </p>
        <p className="text-sm font-normal text-[#706F6F] my-3">
          {newsDtls.details}
        </p>
        <Link to={`/category/${newsDtls?.category_id}`} className="text-lg text-[#ffffff] font-semibold bg-[#D72050] px-3 py-1 rounded-sm">All news category</Link>
      </div>
    </div>
  );
};

export default DetailsEvery;
