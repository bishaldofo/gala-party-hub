import { Link } from "react-router-dom";

const OurServices = ({service}) => {

   const {title, category, price, description, thumbURL, descriptionImageURL} = service || {}
   
   return (
      <div className="">
         <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
            <div>
               <figure><img className="w-full h-52 object-cover" src={thumbURL} alt={title} /></figure>
               <div className="card-actions ml-5 mt-2">
                  <button className="btn btn-primary px-5 py-2 text-xl bg-orange-600 hover:bg-orange-700 border-none text-white">${price}</button>
               </div>
            </div>
            <div className="card-body">
               <h2 className="card-title"><Link to='/serviceDetails'>{title}</Link></h2>
               <p>
                  {
                     description.length > 200 ?
                        <p>{description.slice(0, 200)}</p>
                        : <p>{description}</p>
                  }
               </p>
            </div>
         </div>
      </div>
   );
};

export default OurServices;