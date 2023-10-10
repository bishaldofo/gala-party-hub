const GetStarted = () => {
   return (
      <div className="bg-[#F5F0F0] py-20">
         <div className="w-full md:w-1/2 m-auto">
            <h2 className="text-orange-600 text-2xl font-semibold text-center">Let’s Get it Started!</h2>
            <form className="w-3/4 m-auto mt-8">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Your name" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email" className="input input-bordered" required />
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Message</span>
                  </label>
                  <textarea placeholder="Write your message..." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
               </div>

               <div className="form-control mt-6">
                  <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700">Send</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default GetStarted;