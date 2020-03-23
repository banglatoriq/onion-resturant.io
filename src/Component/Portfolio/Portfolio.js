import React from 'react';
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './Portfolio.css'
import img1 from "../../img/Image/adult-blur-blurred-background-687824.png";
import img2 from "../../img/Image/chef-cook-food-33614.png";
import img3 from "../../img/Image/architecture-building-city-2047397.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus ,faArrowAltCircleRight,faBell,faTruck} from '@fortawesome/free-solid-svg-icons';
import icone from "../../img/ICON/Group 204.png";
 import icone3 from "../../img/ICON/Group 245.png";
 import icone2 from "../../img/ICON/Group 1133.png";


const Portfolio = () => {
    return (
        <div>
            <Container className="mb-3">
            <Row className="headline">
                <Col sm={8} className="title">
                    <h1>Why you choose us</h1>
                    <p className="title-pera">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor in <br></br>sunt molestias veniam pariatur? Dolor dolorem voluptatem sequi quasi iure.</p>
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Row>
                <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                           <img src={icone} alt=""/>
                            </Col>
                            <Col sm={9}>
                                    <Card.Title><h1 className="card-head">Fast Delevery</h1></Card.Title>
                                        <Card.Text className="card-text">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                        <Card.Text >
                                            <p className="link">See more <FontAwesomeIcon className="fa-lg link-icone" icon={faArrowAltCircleRight}></FontAwesomeIcon></p> 
                                        </Card.Text>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
                
                </Col>
                <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                            <img src={icone2} alt=""/>
                            </Col>
                            <Col sm={9}>
                                    <Card.Title><h1 className="card-head">A Good Auto Responder</h1></Card.Title>
                                        <Card.Text className="card-text">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                        <Card.Text >
                                            <p className="link">See more <FontAwesomeIcon className="fa-lg link-icone" icon={faArrowAltCircleRight}></FontAwesomeIcon></p> 
                                        </Card.Text>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
                
                </Col>
                <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                            <img src={icone3} alt=""/>
                            </Col>
                            <Col sm={9}>
                                    <Card.Title><h1 className="card-head">Fast Delevery</h1></Card.Title>
                                        <Card.Text className="card-text">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                        <Card.Text >
                                            <p className="link">See more <FontAwesomeIcon className="fa-lg link-icone" icon={faArrowAltCircleRight}></FontAwesomeIcon></p> 
                                        </Card.Text>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
                
                </Col>
            </Row>
                
            </Container>
        </div>
    );
};

export default Portfolio;