import React, {useState} from 'react';
import SecondPropDrilling from "./SecondPropDrilling";

const PropDrilling = () => {
    const [user, setUser] = useState({
        id: 101, name: "Nur Alam"
    });
    return (
        <div>
            <SecondPropDrilling user={user} />
        </div>
    );
};

export default PropDrilling;
