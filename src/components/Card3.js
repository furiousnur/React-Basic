import React from 'react';
import {v4 as uuid} from 'uuid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Card3 = () => {
    return (
        <div key={uuid}>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Card3;
