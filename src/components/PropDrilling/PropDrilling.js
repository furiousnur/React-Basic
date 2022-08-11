import React, {useState} from 'react';
import SecondPropDrilling from "./SecondPropDrilling";
import {userContext} from "./UserContext";

const PropDrilling = () => {
    const [user, setUser] = useState({
        id: 20, name: "Nur Alam"
    });
    const [school, setSchool] = useState({
       class: 9, students: 30
    });
    const [info, setInfo] = useState({
        bd: "I love Bangladesh"
    });
    return (
        <userContext.Provider value={{user, school, info}}>
            <SecondPropDrilling/>
        </userContext.Provider>
    );
};

export default PropDrilling;
