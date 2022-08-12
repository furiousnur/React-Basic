import React, {useState} from 'react';
import User from "./User";

const Users = () => {
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    const [gender, setGender] = useState(true);
    const [user, setUser] = useState({
        phone: 9345890834,
        address: 'Dhaka'
    })
    return (
        <>
            <User userName={userName} userId={userId} gender={gender} user={user}/>
        </>
    );
};

export default Users;
