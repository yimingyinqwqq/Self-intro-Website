import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Projects = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='projects-section'>
            <h1 className='projects-section-h'> Here are my projects </h1>
            <br/><br/>

            <Row style={{ justifyContent: 'center' }}>
                <Card style={{ width: '30%', height: '90%' }}>
                    <Card.Img variant="top" style={{ width: '100%', height: '50%', alignSelf: 'center' }} src={require("./imgs/splitter_project.png")} />
                    <Card.Body>
                        <Card.Title> Splitter Web Application </Card.Title>
                        <Card.Text>
                            A web application that will provide people with a better way of splitting the bill by presenting
                            a visualization for the breakdown of the bill and calculation of the total money you should pay
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '30%', height: '90%' }}>
                    <Card.Img variant="top" style={{ width: '70%', height: '50%', alignSelf: 'center' }} src={require("./imgs/cs425projects.jpg")} />
                    <Card.Body>
                        <Card.Title> Distributed System Projects </Card.Title>
                        <Card.Text>
                            Extra credit projects for the course CS 425: Distributed System, including distributed grep, membership list,
                            distributed file system, and distributed ML prediction.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '30%', height: '90%' }}>
                    <Card.Img variant="top" style={{ width: '70%', height: '50%', alignSelf: 'center' }} src={require("./imgs/wcs_project.png")} />
                    <Card.Body>
                        <Card.Title> WCS Project </Card.Title>
                        <Card.Text>
                            This project builds a website for people in UIUC to find their coursemates. Additionally, it is my first project relating to
                            frontend and backend.
                        </Card.Text>

                        <Button variant="primary" href="https://docs.google.com/presentation/d/11_EBnLCSdsqadcHZIaEfqVNSeuj96sFZF5qbS7mDznk/edit#slide=id.g123a4943b07_3_23"> Project PPT </Button>
                    </Card.Body>
                </Card>

                <Button variant="primary" style={{ width: '90%', height: '40px' }} href="https://github.com/yimingyinqwqq"> My Projects in Github </Button>
            </Row>
        </div>
    );
}

export default React.forwardRef(Projects);