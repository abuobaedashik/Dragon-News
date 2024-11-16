import { useLoaderData } from "react-router-dom";
import LoginSection from "../Component-Layout/LoginSection";
import Header from "../Components/Header";
import Qzones from "../Components/Qzones";
import DetailsEvery from "../Component-Layout/DetailsEvery";
import Footer from "./Footer";

const NewsDetails = () => {
   const data =useLoaderData()
   const newsDtls =data.data[0]
//    console.log(newsDtls);
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
            </header>
            <main className=" gap-5 w-[95%] mx-auto mt-3">
             <section className="">
                 <DetailsEvery newsDtls={newsDtls}></DetailsEvery>
             </section>
            </main>
            <footer className="mt-5">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default NewsDetails;