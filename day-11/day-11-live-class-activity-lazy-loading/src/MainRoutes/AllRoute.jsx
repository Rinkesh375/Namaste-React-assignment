import React,{lazy,Suspense} from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Error from '../components/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';



const HomePage = lazy(()=>import("../components/HomePage"));
const Contact = lazy(()=>import("../components/Contact"));
const About = lazy(()=>import("../components/About"));


const AllRoute = () => {
  return (
    <>
     <Header/> 
     <Outlet/>
     <Footer/>
    </>
  );
}

const appRouter = createBrowserRouter([
   {
    path:"/",
    element:<AllRoute/>,
    errorElement:<Error/>,
    children:[
        {
            path:"/",
            element:<Suspense fallback={<h1>Home Page is Loading...</h1>}><HomePage/></Suspense>
        },
        {
            path:"/contact",
            element:<Suspense fallback={<h1>Contact Page is Loading...</h1>}><Contact/></Suspense>
        },
        {
            path:"/about",
            element:<Suspense fallback={<h1>About Page is Loading...</h1>}><About/></Suspense>
        }
    ]
   }


])

export  {AllRoute,appRouter};
