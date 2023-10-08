import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root>Hello world!</Root>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('event.json')
         },
         {
            path: "/about",
            element: <About></About>
         },
         {
            path: "/serviceDetails",
            element: <ServiceDetails></ServiceDetails>
         },
         {
            path: "/login",
            element: <Login></Login>,
            
         },
         {
            path: "/register",
            element: <Register></Register>,
         }
      ]
   },
]);
 
export default router;