import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
   return (
      <div className="bg-[#F8F8F8] m-auto py-8">
         <div className="max-w-screen-xl m-auto">
            <h1 className="text-orange-600 font-bold text-xl text-center mb-8"><Link to="/">GalaPerfection</Link></h1>
            <div className="w-2/3 bg-[#fff] border shadow-sm mx-auto grid grid-cols-2 items-center">
               <div>
                  <img src="https://i.ibb.co/DC9SQzf/pexels-ron-lach-10033199.jpg" alt="" />
               </div>
               <div className="py-10 px-5">
                  <h2 className="text-base font-medium text-orange-600 mb-5 text-center">Log in to your account</h2>
                  <p className="text-base font-medium mb-5 text-center">Not a member yet? <Link className="font-semibold text-orange-600" to='/register'>Join now</Link></p>

                  <div className="text-center">
                     <button className="btn m-auto w-full"><FaGoogle></FaGoogle>Sign in with Google</button>
                     <p className="my-5 text-orange-600 text-center">Or log in with your email</p>
                  </div>
                  <form>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Login;