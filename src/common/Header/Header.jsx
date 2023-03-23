import React from 'react'
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='headerDesign'>
      <div className='navbarDesign'>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand as={Link} to='/'><img src="/src/img/diente.png" className='imgNavbar'/>Clinica Grand Line</Navbar.Brand>
            <Nav className="d-flex">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}
