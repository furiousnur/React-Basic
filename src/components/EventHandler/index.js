import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EventHandler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changedValue : ''
        }
    }

    handleClick = () => {

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
                    <h2>EventHandler</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Change Value: {this.state.changedValue}</Form.Label>
                            <Form.Control onChange={this.handleOnChange} type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Button onClick={this.handleClick} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default EventHandler;