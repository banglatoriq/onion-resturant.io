import React from 'react';
import './FoodCategory.css';
import { Container, Row, Col, ButtonGroup,Button } from 'react-bootstrap';


const FoodCategory = () => {
    return (
        <div>
            <Container className="mb-3">
                <Row>
                    <Col sm={12}>
                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="secondary">Left</Button>
                                            <Button variant="secondary">Middle</Button>
                                            <Button variant="secondary">Right</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodCategory;