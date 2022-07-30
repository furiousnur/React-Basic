import React, {useState} from 'react';
import Button from "react-bootstrap/Button";

function Index2(){
    const [count, setCount] = useState(0)
    const increment = () =>{
       setCount(count+1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button variant="primary" onClick={increment}>
                Submit
            </Button>
        </div>
    );
}

export default Index2;