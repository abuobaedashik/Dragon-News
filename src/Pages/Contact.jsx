import React from "react";
import TopHeader from "../Component-Layout/TopHeader";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const Contact = () => {
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
      contact
    </div>
  );
};

export default Contact;
