import React from 'react';

const Child = (props) =>{
    const data = "I am from child component";
    props.onChildData(data);
    return (
        <div>
            <h2>Child component</h2>
            <p>{props.data}</p>
        </div>
    );
};

export default Child;
