import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container} from 'react-bootstrap';
import logo from '../../img/logo2.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const logostyle ={
    width:'130px',
    height:'40px'
}
const Header = () => {
    return (
        <div>
            <Container>
                <Navbar>
                <Navbar.Brand href="#home"><img style={logostyle} src={logo} alt=""/></Navbar.Brand>
                <Nav className="ml-auto nav-link">
                        <Nav.Link href="#home"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Nav.Link>
                        <Nav.Link href="#features">Login</Nav.Link>
                        <Nav.Link href="#pricing" className="signup">Sign Up</Nav.Link>
                </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;