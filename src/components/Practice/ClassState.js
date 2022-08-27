import React, {Component} from 'react';

class ClassState extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            count: 0
        }
    }

    handleIncrease = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Class State Example with Handling</h1>
                <h3>Count: {count}</h3>
                <button onClick={this.handleIncrease}>Increase</button>
            </div>
        );
    }
}

export default ClassState;