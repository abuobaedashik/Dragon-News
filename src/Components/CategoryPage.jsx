import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import { DiAtlassian } from "react-icons/di";

const CategoryPage = () => {
 
    const { data: news } = useLoaderData();
    const [allnews,setallnews]=useState([]);
    const [showall,setshowall]=useState(false)
    useEffect(()=>{
        if (showall) {
           setallnews(news)
        }else{
            const newsevery =news.slice(0, 3)
            setallnews(newsevery)
        }
    },[showall,news])
   const handleShowall=()=>{
    setshowall((prev)=>!prev)
   }
  console.log(news);
  
  return (
    <div>
      <p className="text-left text-lg font-medium text-[#403F3F] ">
        Dragon News Home
      </p>
      <p className="text-left text-sm font-normal text-[#403f3fcb] mt-2 mb-4">
        {news.length} News Found on this Category
      </p>
      <div className="mt-2">
        {allnews?.map((everyNews) => (
          <NewsCard key={everyNews._id} everyNews={everyNews}></NewsCard>
        ))}
        <div className="flex sticky bottom-2 left-[300px] justify-center items-center pt-3">
          <NavLink onClick={handleShowall}  className="border-[#FF904D] text-[#FF904D] border  px-4 py-1 rounded-lg hover:bg-[#FF904D] hover:text-white transition duration-300">
            Load All News
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
