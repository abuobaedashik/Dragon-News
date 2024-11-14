import { useLoaderData } from "react-router-dom";
import LoginSection from "../Component-Layout/LoginSection";
import Header from "../Components/Header";
import Qzones from "../Components/Qzones";
import DetailsEvery from "../Component-Layout/DetailsEvery";

const NewsDetails = () => {
   const data =useLoaderData()
   const newsDtls =data.data[0]
   console.log(newsDtls);
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto mt-3">
             <section className="col-span-9">
                 <DetailsEvery newsDtls={newsDtls}></DetailsEvery>
             </section>
             <aside className="col-span-3 text-[#706F6F] border ">
                 <LoginSection></LoginSection>
                 <Qzones></Qzones>
             </aside>
            </main>
            
        </div>
    );
};

export default NewsDetails;