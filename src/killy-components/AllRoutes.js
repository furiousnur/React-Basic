import React from 'react';
import Home from "./Home";
import {Route} from "react-router-dom";
import About from "./About";

const AllRoutes = () => {
    return (
        <> 
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/> 
        </>
    );
};

export default AllRoutes;
