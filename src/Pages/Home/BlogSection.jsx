import { useLoaderData } from "react-router-dom";

const BlogSection = () => {

   const blogs = useLoaderData()

   const {title, description, image, category} = blogs || {}
   
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p>{description}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogSection;