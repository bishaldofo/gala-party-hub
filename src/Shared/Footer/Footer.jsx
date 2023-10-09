import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="bg-[#1F1F1F]">
         <footer className="footer max-w-7xl m-auto py-10 px-2 bg-[#1F1F1F] text-white">
            <aside>
               <Link className="normal-case font-bold text-xl" to="/">GalaPerfection</Link>
               <p>Providing reliable Service since 1992</p>
            </aside> 
            <nav>
               <header className="footer-title">Services</header> 
               <a className="link link-hover">Corporate Meetings</a> 
               <a className="link link-hover">Anniversaries</a> 
               <a className="link link-hover">Birthday Parties</a> 
               <a className="link link-hover">Family Celebrations</a>
               <a className="link link-hover">Graduation and Prom Night</a>
               <a className="link link-hover">Masquerade Parties</a>
            </nav> 
            <nav>
               <header className="footer-title">Company</header>
               <a className="link link-hover">Home</a> 
               <a className="link link-hover">About us</a> 
               <a className="link link-hover">Event</a>
               <a className="link link-hover">Contact</a>
            </nav> 
            <nav>
               <header className="footer-title">Legal</header> 
               <a className="link link-hover">Terms of use</a> 
               <a className="link link-hover">Privacy policy</a> 
               <a className="link link-hover">Cookie policy</a>
            </nav>
         </footer>
      </div>
   );
};

export default Footer;