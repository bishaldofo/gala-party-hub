import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Register from "../Pages/Login/Register";
import Event from "../Pages/Event/Event";
import Blog from "../Pages/Blog/Blog";
import BlogSection from "../Pages/Home/BlogSection";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root>Hello world!</Root>,
      errorElement: <NotFound></NotFound>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/event.json'),
         },
         {
            path: "/blogSection",
            element: <BlogSection></BlogSection>,
            loader: () => fetch('/event.json')
         },
         {
            path: "/services/:uid",
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: () => fetch('/event.json')
         },
         {
            path: "/about",
            element: <About></About>
         },
         {
            path: "/event",
            element: <Event></Event>,
            loader: () => fetch('/event.json')
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
            loader: () => fetch('/event.json')
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