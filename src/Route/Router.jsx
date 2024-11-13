import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element:<h2>News</h2>
    },
    {
        path:'auth',
        element:<h2>Login</h2>
    },
    {
        path:'*',
        element:<h2>Error</h2>
    }
])

export default Router;