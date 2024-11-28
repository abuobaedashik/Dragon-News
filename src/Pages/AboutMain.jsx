import React from "react";
import AboutDev from "./About";
import TopHeader from "../Component-Layout/TopHeader";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import About from "./About";
import Footer from "./Footer";

const AboutMain = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <header className="mx-auto  w-[95%]">
        <Header></Header>
      </header>
      <section className=" mt-6 mx-auto px-0  w-[95%] ">
        <Navbar></Navbar>
      </section>
      <About></About>
      <div className="foot mt-5">
       <Footer></Footer>
        </div>
    </div>
  );
};

export default AboutMain;
