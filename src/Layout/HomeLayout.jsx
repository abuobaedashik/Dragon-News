import { Outlet } from "react-router-dom";
import CategoryBtn from "../Component-Layout/CategoryBtn";
import LoginSection from "../Component-Layout/LoginSection";
import CategoryPage from "../Components/CategoryPage";
import Header from "../Components/Header";
import MarqueeTest from "../Components/MarqueeTest";
import Navbar from "../Components/Navbar";
import logo from "../assets/assetsImage/logo.png";
import Qzones from "../Components/Qzones";
import TopHeader from "../Component-Layout/TopHeader";
import CardLeft from "../Components/CardLeft";
import Footer from "../Pages/Footer";
import imgad from '../assets/assetsImage/GCLR_2024_banner_CTA-1024x536.webp'
import { useEffect } from "react";
import Subscribe from "../Component-Layout/Subscribe";

const HomeLayout = () => {
  useEffect(() => {
    document.title = "Dragon News | Homepage";
  }, [])
  return (
    <div className="font-Poppins">
      <div className=" mx-auto bg-[#ffffff] ">
        <TopHeader></TopHeader>
        <header className="mx-auto  w-[95%]">
          <Header></Header>
        </header>
        <section className=" mt-6 mx-auto px-0  w-[95%] ">
          <Navbar></Navbar>
        </section>
        <div className="border border-t mx-auto mt-4 w-[95%]"></div>
        <section className=" md:flex items-center justify-center  w-[95%] mt-2 hidden mx-auto">
          <MarqueeTest></MarqueeTest>
        </section>
        <main className="grid md:grid-cols-12 mx-auto gap-4 text-center mt-8 mb-3  w-[95%]">
          <aside className="text-[#706F6F] md:col-span-3">
            <CategoryBtn></CategoryBtn>
            <CardLeft></CardLeft>
          </aside>
          <section className="text-[#706F6F]  md:col-span-6 h-[2080px] overflow-scroll relative">
            <Outlet></Outlet>
          </section>
          <aside className="text-[#706F6F] md:col-span-3">
            <LoginSection></LoginSection>
            <Qzones></Qzones>
          </aside>
        </main>
        <section className="ad mx-auto w-full mb-6"><img src={imgad} className="w-full h-[350px] " alt="" /></section>
        <section className="ad pb-8 mt-4 mb-6 w-[95%] mx-auto">
           <Subscribe></Subscribe>
        </section>
      </div>
      <footer>
         <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
