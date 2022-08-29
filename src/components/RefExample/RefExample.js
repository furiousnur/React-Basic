import React, { useRef } from 'react';

const RefExample = () => {
    const [count, setCount] = React.useState(0);
    const numberRef = useRef(0)

    const onCountPress = () => {
        setCount(count + 1)
    }
    const onNumberRefPress = () => {
        numberRef.current = numberRef.current + 1 
    }
    
    return (
        <div>
            <p>count - {count}</p>
            <p>numberRef - {numberRef.current}</p>
            <button onClick={onCountPress}>Set Count</button>
            <button onClick={onNumberRefPress}>Set Number Ref</button>
        </div>
    );
};

export default RefExample;
