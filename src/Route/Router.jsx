import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryPage from "../Components/CategoryPage";
import Auth from "../Component-Layout/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
        element:<NewsDetails></NewsDetails>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
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
        element:<h2>Error</h2>
    }
])

export default Router;