import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormIndex() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitHandle = (e) =>{
        let userInfo = {
            email,
            password
        }
        // console.log("form submitted")
        console.log(userInfo)
        e.preventDefault();
    }
    const emailHandle = (e) =>{
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    const passwordHandle = (e) =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <div className="card">
                <Form onClick={submitHandle}>
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