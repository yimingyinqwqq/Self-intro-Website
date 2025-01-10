import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Experience = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='projects-section'>
            <h1 className='projects-section-h'> My experience </h1>
            <br/><br/>

            <Row style={{ justifyContent: 'center' }}>
                <Card style={{ width: '30%', height: '90%' }}>
                    <Card.Img variant="top" style={{ width: '100%', height: '50%', alignSelf: 'center' }} src={require("./imgs/splitter_project.png")} />
                    <Card.Body>
                        <Card.Title> Full Stack development Intern </Card.Title>
                        <Card.Text>
                            Combining Vue3 with Python, I built a web for internal usage of two functionalities.
                            First, the visualization of the high performance cluster (HPC).
                            Second, the user group access control interface that allows user-to-group changes on LDAP and Unix/Linux group.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Button variant="primary" style={{ width: '90%', height: '40px' }} href="https://github.com/yimingyinqwqq"> My Projects in Github </Button>
            </Row>
        </div>
    );
}

export default React.forwardRef(Experience);