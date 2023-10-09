import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

   const {createUser} = useContext(AuthContext)

   const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password');
      console.log(name, email, password, photo)

      createUser(email, password)
         .then(result => {
         console.log(result.user)
         })
         .catch(error => {
            console.log(error)
         })
   }

   return (
      <div className="bg-[#F8F8F8] m-auto py-8 px-4">
         <div className="max-w-screen-xl m-auto">
            <h1 className="text-orange-600 font-bold text-xl text-center mb-8"><Link to="/">GalaPerfection</Link></h1>
            <div className="w-full lg:w-2/3 bg-[#fff] border shadow-sm mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
               <div>
                  <img src="https://i.ibb.co/DC9SQzf/pexels-ron-lach-10033199.jpg" alt="" />
               </div>
               <div className="py-10 px-5">
                  <div className="text-center">
                     <button className="btn m-auto w-full"><FaGoogle></FaGoogle>Sign in with Google</button>
                     <p className="my-2 text-orange-600 text-center">Or Sign up with your email</p>
                  </div>
                  <form onSubmit={handleRegister}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                     </div>
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
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-600 border-orange-600">Register</button>
                     </div>
                  </form>
                  <div className="text-base font-medium mt-5 text-center">Already have an account? <Link className="font-semibold text-orange-600" to='/login'>Log in</Link></div>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Register;