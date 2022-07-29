import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            message: "message: You can not make it negative and button will get disabled!",
        }
    }

    increament = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decreament = () =>{
        if (this.state.count > 0){
            this.setState({
                count : this.state.count - 1
            })
        }else{
            alert(this.state.message);
        }
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Count: {count}</h1>
                <Button onClick={this.increament}>+</Button>
                <Button disabled={count === 0 ? true : false} onClick={this.decreament}>-</Button>
            </div>
        );
    }
}

export default State;