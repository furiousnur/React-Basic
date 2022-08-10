import React, {useRef} from 'react';

const UserForm = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="userName">User Name: </label>
                <input type="text" id="userName" ref={userNameRef}/>
            </div>
            <div className="form-field">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={passwordRef}/>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default UserForm;
