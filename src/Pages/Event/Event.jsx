import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import EventPageBanner from "./EventPageBanner";
import OurServices from "../Home/OurServices";
import Footer from "../../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Event = () => {
   const services = useLoaderData()
   const { loading } = useContext(AuthContext)

   if (loading) {
      return <div className="flex h-screen items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
   }

   return (
      <div>
         <div>
            <Navbar></Navbar>
            <EventPageBanner></EventPageBanner>
            <div className="max-w-7xl mx-auto py-20 px-4">
               <h2 className="text-2xl md:text-5xl font-semibold text-orange-600 text-center">Our all
                Services</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
                  {
                     services?.map(service => <OurServices key={service} service={service}></OurServices>)
                  }
               </div>
            </div>
            <Footer></Footer>
         </div>
      </div>
   );
};

export default Event;