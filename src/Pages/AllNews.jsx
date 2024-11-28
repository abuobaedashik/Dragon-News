import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import AllNewsCard from "./AllNewsCard";
import { Authcontex } from "../Provider/AuthProvider";
import TopHeader from "../Component-Layout/TopHeader";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const AllNews = () => {
  const { allnews } = useContext(Authcontex);
  const [all,setall]=useState([]);
  const [showall,setshowall]=useState(false)
  // console.log(allnews);
  useEffect(() => {
    if (showall) {
      setall(allnews);
    } else {
      const newsevery = allnews.slice(0, 6);
      setall(newsevery);
    }
  }, [showall, allnews]);
  const handleShowall = () => {
    setshowall((prev) => !prev);
  };
  useEffect(() => {
    document.title = "News | All News";
  }, [])
  return (
    <div>
      <TopHeader></TopHeader>
      <header className="mx-auto  w-[95%]">
        <Header></Header>
      </header>
      <section className=" mt-6 mx-auto px-0  w-[95%] ">
        <Navbar></Navbar>
      </section>
      <div className="border border-t mx-auto mt-4 w-[95%]"></div>
      <div className=" grid sm:grid-cols-2 grid-cols-1 2xl:grid-cols-3 md:grid-cols-3 mx-auto w-[95%] gap-4 my-8">
        {all?.map((everyNews) => (
          <AllNewsCard key={everyNews._id} everyNews={everyNews}></AllNewsCard>
        ))}
      </div>
      <div className="flex justify-center items-center pt-3 pb-6">
          <NavLink onClick={handleShowall}  className="border border-blue-500 text-[#13131369] px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Load More News
          </NavLink>
        </div>
        <div className="mt-5">
         <Footer></Footer>
        </div>
    </div>
  );
};

export default AllNews;
