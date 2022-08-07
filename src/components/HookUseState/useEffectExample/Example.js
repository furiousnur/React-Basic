import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";

const Example = () => {
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    //useEffect with anonymous function
    useEffect(()=>{
        console.log("useEffect");
    },[count]); //calls with only first render that's why use empty array and if change value of count then it will render

    return (
        <div>
            {console.log("rendering")}
            <h1>Use Effect</h1>
            <h4>Count: {count}</h4>
            <Button variant="primary" onClick={()=>{setCount((count)=>count+1)}}>
                Add 1
            </Button>
            <Button variant="primary" onClick={()=>{setIsLoading(!isLoading)}}>
                IsLoading
            </Button>
        </div>
    );
};

export default Example;
