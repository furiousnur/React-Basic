import React,{useContext, useState} from 'react';
import ThirdPropDrilling from "./ThirdPropDrilling";
import {dataContext, userContext} from "./UserContext";

const SecondPropDrilling = () => {
    const {info} = useContext(userContext);

    const [programmer, setProgrammer] = useState({
        language: "Php, Java, NodeJs",
        designation: "Software Engineer"
    });

    return (
        <>
            <h1 style={{textAlign:"left", color: "red"}}>{info.bd}</h1>
            <dataContext.Provider value={{programmer}}>
                <ThirdPropDrilling/>
            </dataContext.Provider>
        </>
    );
};

export default SecondPropDrilling;
