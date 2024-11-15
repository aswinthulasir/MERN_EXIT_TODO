import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




export default class NavbarComp extends Component {
  render() {
    return (
      <>
        

        <Navbar expand="lg" fixed="top" className="bg-body-white " style={{backgroundColor:'#fafbff',boxShadow:'0px 2px 2px rgba(0, 0, 0, 0.034)'}}>
          <Container fluid>
            <div className="d-flex align-items-center">

              <div className="d-flex align-items-center logo-container">
               
                <Navbar.Brand href="/" className="logo-text">TODO APP - ASWIN THULASI R</Navbar.Brand>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto custom-listbar">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">Add</Nav.Link>
                <Nav.Link as={Link} to="/login" style={{ color:'#6096ba'}} className='login-btn'>Login</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
