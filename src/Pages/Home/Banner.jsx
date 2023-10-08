const Banner = () => {
   return (
      <div>
         <div className="hero h-[90vh]" style={{backgroundImage: 'url(https://images.pexels.com/photos/5935254/pexels-photo-5935254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
            <div className="hero-overlay bg-[#F67632] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-screen-md">
                  <h1 className="mb-5 text-5xl font-bold">The Best Time to Celebrate!</h1>
                  <p className="mb-5 text-lg">They provide pleasure with desire and in. He sought to escape, as if he were to be accepted as an exercise. In the softening of them, or of repudiating them, and from that only.</p>
                  <button className="btn bg-orange-600 border-none text-xl py-3 px-5 btn-primary">Get Started</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;