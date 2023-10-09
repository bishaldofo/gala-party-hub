const EventPageBanner = () => {
   return (
      <div>
         <div className="hero h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/1rSCB39/2-1.jpg)'}}>
            <div className="hero-overlay bg-[#F67632] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-screen-md">
                  <h1 className="mb-1 md:mb-5 text-2xl md:text-5xl font-bold">Celebrate With Us!</h1>
                  <p className="mb-1 md:mb-5 text-sm md:text-lg">Join the festivities and celebrate with us! Experience unforgettable moments, delightful surprises, and a whole lot of fun at our events.</p>
                  <button className="btn bg-orange-600 border-none text-xl py-3 px-5 btn-primary hover:bg-orange-700">Get Started</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EventPageBanner;