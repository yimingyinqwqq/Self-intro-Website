import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='projects-section'>
            <h1 className='projects-section-h'> Here are my projects </h1>
            <p className='projects-section-p'> l </p>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default React.forwardRef(Projects);