import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import EventPageBanner from "./EventPageBanner";
import OurServices from "../Home/OurServices";

const Event = () => {
   
   const services = useLoaderData()

   return (
      <div>
         <div>
            <Navbar></Navbar>
            <EventPageBanner></EventPageBanner>
            <div className="max-w-7xl mx-auto py-20">
               <h2 className="text-5xl font-semibold text-orange-600 text-center">Our all
                Services</h2>
               <div className="grid grid-cols-3 gap-10 my-5">
                  {
                     services?.map(service => <OurServices key={service} service={service}></OurServices>)
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Event;