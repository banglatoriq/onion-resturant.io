import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import logo from "../../img/logo.png"

const Footer = () => {
    return (
        <div className="footer">
            
                <Row>
                    <Col sm={7}>
                        <img className="logo" src={logo} alt=""/>
                    </Col>
                    <Col sm={2}>
                        <ul className="category-list">
                            <li><p>About Online food</p></li>
                            <li><p>Read Our Blog</p></li>
                            <li><p>Sign up to deliver</p></li>
                            <li><p>Add your restaurant</p></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                    <ul className="category-list">
                    <li>
                             <p>About Online food</p></li>
                            <li><p>Read Our Blog</p></li>
                            <li><p>Sign up to deliver</p></li>
                            <li><p>Add your restaurant</p></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <p className="footer-text">Copyright@2020 Online food</p>
                    </Col>
                    <Col>
                        <ul className="footer-list">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Pricing</li>
                        </ul>
                    </Col>
                </Row>
          
        </div>
    );
};

export default Footer;