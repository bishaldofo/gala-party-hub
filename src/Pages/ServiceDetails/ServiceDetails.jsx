import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import EventPageBanner from "../Event/EventPageBanner";
import Footer from "../../Shared/Footer/Footer";

const ServiceDetails = () => {

   const [serviceDetails, setServiceDetails] = useState()

   const { uid } = useParams()

   const allServices = useLoaderData()

   const {title, descriptionImageURL, description} = serviceDetails || {}

   useEffect(() => {
      const findService = allServices?.find(service => service.id == uid)
      setServiceDetails(findService)
   }, [uid, allServices])

   return (
      <div className="">
         <Navbar></Navbar>
         <div className="max-w-7xl m-auto bg-[#fff] p-5 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <div className="col-span-3">
                  <div className="card bg-base-100 shadow-xl">
                     <figure><img className="h-[60vh] w-full object-cover" src={descriptionImageURL} alt="Shoes" /></figure>
                     <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-xl text-orange-600 font-bold">SERVICE DETAILS</h3>
                  <div className="py-3 border-b-2 flex items-center justify-between">
                     <p className="text-sm font-bold">SERVICE TYPE:</p> <span className="text-sm font-normal ml-3">Corporate</span>
                  </div>
                  <div className="py-3 border-b-2 flex items-center justify-between">
                     <p className="text-sm font-bold">DURATION:
:</p> <span className="text-sm font-normal ml-3">4 Hours</span>
                  </div>
                  <div className="py-3 border-b-2 flex items-center justify-between">
                     <p className="text-sm font-bold">PARTICIPANTS:
:</p> <span className="text-sm font-normal ml-3">Up to 50 persons</span>
                  </div>
                  <div className="py-3 border-b-2 flex items-center justify-between">
                     <p className="text-sm font-bold">PRICE:
:</p> <span className="text-sm font-normal ml-3">$1200</span>
                  </div>
                  <div className="mt-5">
                     <button className="btn w-full bg-orange-600 text-white hover:bg-orange-700">Book Now</button>
                  </div>
               </div>

               
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ServiceDetails;