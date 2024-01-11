import React,{lazy,Suspense} from 'react';
import { Routes,Route } from 'react-router-dom';
import Error from '../components/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';



const HomePage = lazy(()=>import("../components/HomePage"));
const Contact = lazy(()=>import("../components/Contact"));
const About = lazy(()=>import("../components/About"));


const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<h1>Home Page is Loading...</h1>}><HomePage/></Suspense>}/>
      <Route path="/about" element={<Suspense fallback={<h1>About Page is Loading...</h1>}><About/></Suspense>}/>
      <Route path="/contact" element={<Suspense fallback={<h1>Contact Page is Loading...</h1>}><Contact/></Suspense>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}



export  {AllRoute};
