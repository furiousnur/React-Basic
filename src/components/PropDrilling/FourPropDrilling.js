import React from 'react';

const FourPropDrilling = (props) => {
    const {name, id} = props.user;
    return (
        <div>
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default FourPropDrilling;
