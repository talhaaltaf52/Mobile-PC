import React from 'react';
import './navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from '../Buttons/Button';
import logo from './Images/logo.png';


const Navbars = () => {

    return(
        <>
            <Navbar expand="lg" style={{ marginTop:"30px" }}>
                <Container>
                    <img src={logo} style={{ height:"100px" }}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="nav">
                            <Nav className="nav_links me-auto">
                                <Nav.Link style={{color:"#000", marginLeft:"20px"}}>Home</Nav.Link>
                                <Nav.Link style={{color:"#000", marginLeft:"20px"}}>Reviews</Nav.Link>
                                <Nav.Link style={{color:"#000", marginLeft:"20px"}}>Best Seller</Nav.Link>
                                <Nav.Link style={{color:"#000", marginLeft:"20px"}}>About</Nav.Link>
                                <Button text="Login / SignUp" className="button_1"/>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;