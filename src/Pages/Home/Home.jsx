import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CreativeTeam from "./CreativeTeam";
import GetStarted from "./GetStarted";
import OurNewsEvent from "./OurNewsEvent";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
   const services = useLoaderData()

   return (
      <div className="">
         <Navbar></Navbar>
         <Banner></Banner>
         <div className="max-w-7xl mx-auto py-20">
            <h2 className="text-5xl font-semibold text-orange-600 text-center">Our Services</h2>
            <div className="grid grid-cols-3 gap-10 my-5">
               {
                  services?.map(service => <OurServices key={service} service={service}></OurServices>)
               }
            </div>
         </div>
         
         <Testimonial></Testimonial>
         <CreativeTeam></CreativeTeam>
         <OurNewsEvent></OurNewsEvent>
         <GetStarted></GetStarted>
         <Footer></Footer>
      </div>
   );
};

export default Home;