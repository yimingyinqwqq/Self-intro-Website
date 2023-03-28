import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Courses = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='courses-section'>
            <h1 className='courses-section-h' style={{marginTop: "10%"}}> Important Courses I took </h1>
            <br /><br /><br /><br />

            <Row className='courses-section'>
                <Col>
                    <CardGroup>
                        <Card className='card-container' style={{ border: '4px solid rgb(78, 104, 189)' }}>
                            <br />
                            <Card.Img variant="top" className='course-img' src={require("./imgs/cs225.jpg")} />
                            <br />
                            <Card.Body>
                                <Card.Title> CS 225: Data Structures </Card.Title>
                                <Card.Text>
                                    C++ programming course focuses on both theory of data structures and its application
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-container' style={{ border: '4px solid rgb(115, 147, 255)' }}>
                            <br />
                            <Card.Img variant="top" className='course-img' src={require("./imgs/cs341.jpg")} />
                            <br />
                            <Card.Body>
                                <Card.Title> CS 341: System Programming </Card.Title>
                                <Card.Text>
                                    C programming course focuses on memory, process, thread, and network
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='card-container' style={{ border: '4px solid rgb(115, 199, 255)' }}>
                            <br />
                            <Card.Img variant="top" className='course-img' src={require("./imgs/cs425.png")} />
                            <Card.Body>
                                <Card.Title> CS 425: Distributed System </Card.Title>
                                <Card.Text>
                                    Distributed Computing Theory, Systems, and Cloud Computing
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='card-container' style={{ border: '4px solid rgb(115, 255, 159)' }}>
                            <br />
                            <Card.Img variant="top" className='course-img' src={require("./imgs/cs438.jpeg")} />
                            <Card.Body>
                                <Card.Title> CS 438: Communication Networks </Card.Title>
                                <Card.Text>
                                    Discuss design issues and protocols in the transport, network, and data link layers
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='card-container' style={{ border: '4px solid rgb(255, 222, 115)' }}>
                            <br />
                            <Card.Img variant="top" className='course-img' src={require("./imgs/cs415.jpg")} />
                            <Card.Body>
                                <Card.Title> CS 415: Game Development </Card.Title>
                                <Card.Text>
                                    UE4 engine for developing 3D games; Fundamental math behind game engines
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </CardGroup>
                </Col>

            </Row>
        </div>
    );
}

export default React.forwardRef(Courses);