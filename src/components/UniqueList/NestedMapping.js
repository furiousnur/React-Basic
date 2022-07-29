import React from "react";

const users = [{
    name: "Nur", age: 32, phones: [{home: "30843290840"}, {office: "0389403902"}]
}, {
    name: "Shanto", age: 16, phones: [{home: "23333323423"}, {office: "4645645645"}]
}]

const NestedMapping = () => {
    return <div>
        {users.map((user, index) => {
            const {name, age, phones} = user;
            return <div className="card" key={index}>
                <h3>{name}</h3>
                <p>{age}</p>
                {phones.map((phone, index2) => {
                    return <div key={index2}>
                        <p>{phone.home}</p>
                        <p>{phone.office}</p>
                    </div>
                })}
            </div>
        })}
    </div>
}

export default NestedMapping;