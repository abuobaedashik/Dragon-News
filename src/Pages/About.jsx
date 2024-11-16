import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import TopHeader from "../Component-Layout/TopHeader";

const About = () => {
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
      <p className="mt-11">About</p>
    </div>
  );
};

export default About;
