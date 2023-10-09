const Banner = () => {
   return (
      <div>
         <div className="hero h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/C5mfxZp/pexels-photo-5935254.jpg)'}}>
            <div className="hero-overlay bg-[#F67632] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-screen-md">
                  <h1 className="mb-1 md:mb-5 text-2xl md:text-5xl font-bold">The Best Time to Celebrate!</h1>
                  <p className="mb-1 md:mb-5 text-sm md:text-lg">They provide pleasure with desire and in. He sought to escape, as if he were to be accepted as an exercise. In the softening of them, or of repudiating them, and from that only.</p>
                  <button className="btn bg-orange-600 border-none text-lg md:text-xl py-3 px-5 btn-primary hover:bg-orange-700 text-white">Get Started</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;