import CategoryBtn from "../Component-Layout/CategoryBtn";
import LoginSection from "../Component-Layout/LoginSection";
import Header from "../Components/Header";
import MarqueeTest from "../Components/MarqueeTest";
import Navbar from "../Components/Navbar";
import logo from "../assets/assetsImage/logo.png";
const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header className="mx-auto w-11/12 ">
        <Header></Header>
      </header>
       <section className=" md:flex items-center justify-center mt-2 hidden  mx-auto w-11/12">
          <MarqueeTest></MarqueeTest>
       </section>
       <section className=" mt-6 mx-auto w-11/12">
          <Navbar></Navbar>
       </section>
      <main className="grid md:grid-cols-12 w-11/12 mx-auto gap-4 text-center my-8">
         <aside className="text-[#706F6F] md:col-span-3">
           <CategoryBtn></CategoryBtn>
         </aside>
         <section className="text-[#706F6F]  md:col-span-6">Dragon News Home</section>
         <aside className="text-[#706F6F] md:col-span-3">
           <LoginSection></LoginSection>
         </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
