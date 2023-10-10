const CreativeTeam = () => {
   return (
      <div>
         <div className="hero" style={{backgroundImage: 'url(https://images.pexels.com/photos/1672322/pexels-photo-1672322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
            <div className="hero-overlay bg-orange-600 bg-opacity-60"></div>
            <div className="py-20">
               <h2 className="text-white text-2xl font-bold mb-5 md:text-5xl text-center">Creative Team</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent">
                  <div className="card text-center bg-base-100 bg-transparent">
                     <figure className="rounded-full"><img className="rounded-full border-white w-full" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/srf-300x300.jpg" alt="Shoes" /></figure>
                     <div className="text-center">
                        <h2 className="card-title justify-center text-white text-center">Alice Bohn</h2>
                        <p className="text-white">MANAGER</p>
                     </div>
                  </div>
                  <div className="card text-center bg-base-100 bg-transparent">
                     <figure className="rounded-full"><img className="rounded-full border-white w-full" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/sbd-300x300.jpg" alt="Shoes" /></figure>
                     <div className="text-center">
                        <h2 className="card-title justify-center text-white text-center">Amy Adams</h2>
                        <p className="text-white">СOORDINATOR</p>
                     </div>
                  </div>
                  <div className="card text-center bg-base-100 bg-transparent">
                     <figure className="rounded-full"><img className="rounded-full border-white w-full" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/hh-300x300.jpg" alt="Shoes" /></figure>
                     <div className="text-center">
                        <h2 className="card-title justify-center text-white text-center">Mia Turner</h2>
                        <p className="text-white">AGENCY FOUNDER</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default CreativeTeam;