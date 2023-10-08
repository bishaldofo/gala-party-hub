import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
   return (
      <div className="bg-[#F8F8F8] m-auto py-20">
         <div className="max-w-screen-xl m-auto">
            <h1 className="text-orange-600 font-bold text-xl text-center mb-8"><Link to="/">GalaPerfection</Link></h1>
            <div className="w-1/2 bg-[#fff] border shadow-sm mx-auto grid grid-cols-2">
               <div>
                  <img src="https://i.ibb.co/DC9SQzf/pexels-ron-lach-10033199.jpg" alt="" />
               </div>
               <div className="py-10 px-5">
                  <h2 className="text-base font-medium text-orange-600 mb-5 text-center">Log in to your account</h2>
                  <p className="text-base font-medium mb-5 text-center">Not a member yet? <Link className="font-semibold text-orange-600" to='/register'>Join now</Link></p>

                  <button className="btn m-auto"><FaGoogle></FaGoogle>Sign in with Google</button>
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
                        <button className="btn btn-primary bg-orange-600 border-orange-600">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Login;