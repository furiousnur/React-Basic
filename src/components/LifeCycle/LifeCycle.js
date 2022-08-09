import React, {Component} from 'react';

//Mounting -> constructor -> render -> componentDidMount
//Updating -> state/props -> render ->
//Unmounting ->

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            count: 0
        };
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count +1
        })
    };

    componentDidMount() {
        console.log("componentDidMount");
    };

    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default LifeCycle;
