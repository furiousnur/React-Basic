import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EventHandler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changedValue : '',
            count: 0
        }

        // this.increase = this.increase.bind(this)
    }

    increase(){
        //If you have done this by e6 then not needed binding to button. You can also use binding in constructor
        this.setState({
            count: this.state.count +1
        })
    }

    handleOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        }, () => {
            console.log(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h2>EventHandler: {this.state.count}</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Change Value: {this.state.changedValue}</Form.Label>
                            <Form.Control onChange={this.handleOnChange} type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Button onClick={this.increase.bind(this)} variant="primary">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default EventHandler;