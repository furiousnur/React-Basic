import React,{useContext} from 'react';
import FourPropDrilling from "./FourPropDrilling";
import {dataContext} from "./UserContext";

const ThirdPropDrilling = () => {
    const {programmer} = useContext(dataContext);
    return (
        <>
            <FourPropDrilling/>
            <h2>Designation: <span style={{color:"red"}}>{programmer.designation}</span></h2>
            <h2>Languages: <span style={{color:"red"}}> {programmer.language}</span> </h2>
        </>
    );
};

export default ThirdPropDrilling;
