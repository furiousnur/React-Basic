import React, {Component} from 'react';
import Home from "./Home";
import Login from "./Login";

class ConditionalRendering extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : true,
        }
    }

    render() {
        //ternary operator
        return this.state.isLoggedIn ? <Home /> : <Login />

        //if else
        // if (this.state.isLoggedIn){
        //     return <Home />
        // }else{
        //     return <Login />
        // }
    }
}

export default ConditionalRendering;