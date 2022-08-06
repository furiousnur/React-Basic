// @flow
import React, {useState} from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    // alert(toggle);
    return (
        <div style={{margin: "1rem", backgroundColor: "pink", padding: "1rem"}}>
            {toggle && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam debitis dolore ducimus fuga magnam minima molestiae neque nulla obcaecati placeat, praesentium quae quisquam reiciendis repellendus sequi veniam voluptatem voluptatum.</p>
            )}
            <div style={{textAlign:"center"}}>
                <button onClick={()=>{setToggle(!toggle)}} style={{padding: ".5rem"}}>{toggle ? "Hide" : "Show"}</button>
            </div>
        </div>
    );
};

export default Toggle;