import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CheckOut from "../Components/CheckOut/CheckOut";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import ErrorPage from "../Components/ErrorElement/ErrorPage";
import Home from "../Components/Home/Home";
import LogIn from "../Components/login/LogIn";
import Register from "../Components/Register/Register";
import Main from "../Layouts/Main";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('https://tech-mentors-server.vercel.app/courses/')
            },
            {
                path:'/categories/:id',
                loader:({params})=> fetch(`https://tech-mentors-server.vercel.app/categories/${params.id}`),
                element:<CourseDetails></CourseDetails>,
                
            },
            {
                path:'/checkout/:id',
                loader:({params})=> fetch(`https://tech-mentors-server.vercel.app/checkout/${params.id}`),
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
                
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    },
]);
