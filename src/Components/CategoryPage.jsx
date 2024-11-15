import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryPage = () => {
    const {data: news} =useLoaderData()
    // console.log(news);
    return (
        <div>
            <p className="text-left text-lg font-medium text-[#403F3F] ">
             Dragon News Home
            </p>
            <p className="text-left text-sm font-normal text-[#403f3fcb] mt-2 mb-4">
              {news.length} News Found on this Category 
            </p>
            <div className="mt-2">
                {
                    news.map((everyNews)=><NewsCard key={everyNews._id} everyNews={everyNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;