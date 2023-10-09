import { Link } from "react-router-dom";

const OurServices = ({service}) => {

   const {id, title, category, price, description, thumbURL} = service || {}
   
   return (
      <div className="">
         <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
            <div>
               <figure><img className="w-full h-52 object-cover" src={thumbURL} alt={title} /></figure>
               <div className="card-actions ml-5 mt-2">
                  <span className="text-xl text-orange-600">${price}</span>
               </div>
            </div>
            <div className="card-body">
               <div className="flex justify-between items-center">
                  <h2 className="card-title">{title}</h2>
                  <div>
                     <button className="border-none text-lg rounded-md text-white py-1 px-6 bg-orange-600 hover:bg-orange-700"><Link to={`/services/${id}`}>Details</Link></button>
                  </div>
               </div>
               
               <div className="mt-2">
                  {
                     description.length > 200 ?
                        <p>{description.slice(0, 200)}</p>
                        : <p>{description}</p>
                  }
               </div>
               
            </div>

         </div>
      </div>
   );
};

export default OurServices;