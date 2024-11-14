import { useEffect, useState } from "react";

const CategoryBtn = () => {
   const [category,setCategory] =useState([])
   useEffect (()=>{
      fetch('https://openapi.programming-hero.com/api/news/categories')
      .then((rel)=>rel.json())
      .then(data=>setCategory(data.data.news_category))
   },[])
    return (
        <div>
            <div className='text-[#403F3F] text-lg font-semibold mb-4'>All Caterogy</div>
            <div className="text-lg font-medium items-start pl-3 text-[#9F9F9F] flex flex-col gap-4 mt-2">
             {category.map(category=><button key={category.category_id}>{category.category_name}</button>)}
            </div>
        </div>
    );
};

export default CategoryBtn;