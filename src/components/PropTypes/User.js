import React from 'react';
import PropTypes from "prop-types"

const User = (props) => {
    return (
        <div>
            <h1>{props.userName}</h1>
            <h1>{props.userId}</h1>
            <h1>{props.age}</h1>
            <h1>{props.gender === true ? 'Boy' : 'Girl'}</h1>
            <h3>{props.user.phone}</h3>
        </div>
    );
};

User.propTypes = {
    //key-value
    userName: PropTypes.string,
    userId: PropTypes.number,
    gender:PropTypes.bool,
    user: PropTypes.shape({
        phone: PropTypes.number,
        address: PropTypes.string
    })
}

User.defaultProps = {
    userName: "Default Name",
    userId: 23,
    age: 34
}

export default User;