import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryPage from "../Components/CategoryPage";
import Auth from "../Component-Layout/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRotue from "./PrivateRotue";
import AllNewsCard from "../Pages/AllNewsCard";
import AllNews from "../Pages/AllNews";
import About from "../Pages/About";
import CareerStatictic from "../Pages/CareerStatictic";
import Contact from "../Pages/Contact";
import 'animate.css';
import VideoPage from "../Pages/VideoPage";
import AboutDev from "../Pages/About";
import AboutMain from "../Pages/AboutMain";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Navigate to={`/category/01`}></Navigate>
            },
            {
                path:'category/:id',
                element:<CategoryPage></CategoryPage>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news/:id',
        element:<PrivateRotue><NewsDetails></NewsDetails></PrivateRotue>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path:"/all/",
      element:<PrivateRotue><AllNews></AllNews></PrivateRotue>
    },
    {
        path:"/about",
        element:<AboutMain></AboutMain>
    },
    {
        path:"/video",
        element:<PrivateRotue><VideoPage></VideoPage></PrivateRotue>
    },
    {
        path:"/contact",
        element:<Contact></Contact>
    },
    {
        path:'/auth',
        element:<Auth></Auth>,
        children:[
            {
              path:'/auth',
              element:<Login></Login>
            },
            {
              path:'/auth/register',
              element:<Register></Register>
            }
        ]
    },
    {
        path:'*',
        element:<h2 className="text-3xl font-bold min-h-screen flex items-center justify-center text-red-700">Page Not Found</h2>
    }
])

export default Router;