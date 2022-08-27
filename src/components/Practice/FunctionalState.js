import React, {useState} from 'react';

const FunctionalState = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1)
    }
    const handleDecrement = () =>{
        setCount(count-1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default FunctionalState;
