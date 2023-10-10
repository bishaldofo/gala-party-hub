import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CreativeTeam from "./CreativeTeam";
import GetStarted from "./GetStarted";
import OurServices from "./OurServices";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
   const services = useLoaderData()
   
   const { loading } = useContext(AuthContext)

   if (loading) {
      return <div className="flex h-screen items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
   }
   

   return (
      <div className="">
         <Navbar></Navbar>
         <Banner></Banner>
         <div className="max-w-7xl mx-auto py-20 px-4">
            <h2 className="text-2xl md:text-5xl font-semibold text-orange-600 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
               {
                  services.length > 7 ? 
                     services?.slice(0, 6).map(service => <OurServices key={service} service={service}></OurServices>) 
                     : services
               }
            </div>
            <div className="text-center mt-10">
               <button className="btn btn-primary bg-orange-600 hover:bg-orange-700 text-lg border-none text-white"><Link to='/event'>Load more</Link></button>
            </div>
         </div>
         <CreativeTeam></CreativeTeam>
         <GetStarted></GetStarted>
         <Footer></Footer>
      </div>
   );
};

export default Home;