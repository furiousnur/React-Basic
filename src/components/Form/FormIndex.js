import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormIndex() {
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");

    const [user, setUser] = useState({name: '', email: '', password: ''})
    const {name, email, password} = user
    const submitHandle = (e) =>{
        let userInfo = {
            name,
            email,
            password
        }
        // console.log("form submitted")
        console.log(user)
        e.preventDefault();
    }
    const nameHandle = (e) =>{
        setUser({name: e.target.value, email, password})
    }

    const emailHandle = (e) =>{
        // console.log(e.target.value)
        // setUser(e.target.value)
        setUser({email: e.target.value, name, password})
    }
    const passwordHandle = (e) =>{
        // setUser(e.target.value)
        setUser({password: e.target.value, email, name})
    }

    return (
        <div>
            <div className="card">
                <Form onClick={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name address</Form.Label>
                        <Form.Control onChange={nameHandle} value={name} type="text" placeholder="Enter name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={emailHandle} value={email} type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={passwordHandle} value={password} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default FormIndex;