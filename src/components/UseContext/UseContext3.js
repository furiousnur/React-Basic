import React, {useContext} from 'react';
import {DemoContext} from "./DemoContext";

const UseContext3 = () => {
    const user = useContext(DemoContext); 
    return (
        <div>
            <h1>Name: {user.name}</h1>
        </div>
    );
};

export default UseContext3;
