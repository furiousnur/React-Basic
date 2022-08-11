import React from 'react';
import ThirdPropDrilling from "./ThirdPropDrilling";

const SecondPropDrilling = (props) => {
    return (
        <div>
            <ThirdPropDrilling user={props.user} />
        </div>
    );
};

export default SecondPropDrilling;
