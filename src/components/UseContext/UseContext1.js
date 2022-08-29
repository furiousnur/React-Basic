import React, {useState} from 'react';
import UseContext2 from "./UseContext2";
import { DemoContext } from "./DemoContext" 

const UseContext1 = () => {
    const [user, setUser] = useState({id: 101, name: "Nur Alam"});
    return (
        <div>
            <DemoContext.Provider value={user}>
                <UseContext2/>
            </DemoContext.Provider>
        </div>
    );
};

export default UseContext1;
