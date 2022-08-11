import React,{useContext} from 'react';
import {userContext} from "./UserContext";

const FourPropDrilling = () => {
    //destructuring
    const {user, school} = useContext(userContext);
    return (
        <div>
            <h3>Id: {user.id}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Class: {school.class}</h3>
            <h3>Total Student: {school.students}</h3>
        </div>
    );
};

export default FourPropDrilling;
