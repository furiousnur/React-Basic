import React from 'react';
import Navbar from "./Layouts/Navbar"; 
import Footer from "./Layouts/Footer";
import AllRoutes from "./AllRoutes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Index;
