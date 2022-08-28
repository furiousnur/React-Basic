import React, {useRef} from 'react';

const Other = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();
    
    const handleSubmitForm = (e) =>{
        e.preventDefault();
        const name = userNameRef.current.value;
        const password = passwordRef.current.value;
        console.log({name, password});
    }
    return (
        <div>
            <h1>This is Other component</h1>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name="userName" ref={userNameRef}/>
                <input type="password" name="password" ref={passwordRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Other;
