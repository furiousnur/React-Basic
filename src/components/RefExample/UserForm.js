import React, {Component, createRef} from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef();
        this.passwordRef = createRef();
        this.state = {}
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.userNameRef.current.value);
        console.log(this.passwordRef.current.value);
        this.userNameRef.current.style.color = "red";
        // this.passwordRef.current.style.backgroundColor = "green";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="userName">User Name: </label>
                    <input type="text" id="userName" ref={this.userNameRef}/>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={this.passwordRef}/>
                </div>
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default UserForm;