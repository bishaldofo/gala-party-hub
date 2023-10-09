import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import userDefaultPic from "../../assets/userDefaultPic.png"

const Navbar = () => {

   const { user, logOut } = useContext(AuthContext)

   const handleSignOut = () => {
      logOut()
         .then()
         .catch()
   }
   

   const navLink = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/event'>Event</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
   </>
   return (
      <div className="max-w-7xl mx-auto">
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLink}
                  </ul>
               </div>
               <Link className="normal-case text-orange-600 font-bold text-xl" to="/">GalaPerfection</Link>
               <a ></a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLink}
               </ul>
            </div>
            <div className="navbar-end">
            
               
               {
                  user ? 
                  <details className="dropdown">
                     <summary className="btn border-none hover:bg-transparent bg-transparent p-0 m-0">{
                                 user ? <img className="w-10" src={userDefaultPic} /> : <span>logout</span>
                              }</summary>
                        <ul className="menu dropdown-content z-[1] right-0 rounded-box w-40"><button onClick={handleSignOut} className="btn w-full">Sign Out</button>
                        </ul>
                     </details>
                     :
                     <Link to='/login'><button className="btn">Login</button></Link>
               }
               
            </div>
         </div>
      </div>
   );
};

export default Navbar;