const Register = () => {
   return (
      <div className="max-w-screen-xl m-auto">
         <div className="w-1/2 mx-auto py-20">
            <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Login</h2>
            <form>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
               </div>
            </form>
            <p className="text-lg mt-5">Already have an Account? <Link className="font-bold text-orange-600" to='/login'>Login here</Link></p>
         </div>
      </div>
   );
};

export default Register;