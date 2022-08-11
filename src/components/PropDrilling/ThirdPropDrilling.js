import React from 'react';
import FourPropDrilling from "./FourPropDrilling";

const ThirdPropDrilling = (props) => {
    return (
        <div>
            <FourPropDrilling user={props.user}/>
        </div>
    );
};

export default ThirdPropDrilling;
