import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class HookUseState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increase = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Increase: {count}</Form.Label>
                    </Form.Group>
                    <Button variant="primary" onClick={this.increase}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default HookUseState;