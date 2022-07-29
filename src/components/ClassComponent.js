import React, {Component} from "react";
import {v4 as uuid} from 'uuid';

class ClassComponent extends Component{
    render() {
        return (
            <h3 key={uuid()}>{this.props.name}</h3>
        )
    }
}

export default ClassComponent;