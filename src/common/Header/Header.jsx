import React, { useEffect } from 'react'
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../../pages/userSlice';

export const Header = () => {

  const dispatch = useDispatch();

  const datosCredencialRdx = useSelector(userData);

  const navigate = useNavigate();

  useEffect(()=>{
    console.log(datosCredencialRdx);
  })
//Funcion logout y redireccion a home
  const logoutFunction = () => {
    dispatch(userout({credentials: {}, token: ""}))

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div className='headerDesign'>
      {datosCredencialRdx.credentials.token ? (
        <div className='navbarDesign'>
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand as={Link} to='/'><img src="/src/img/diente.png" className='imgNavbar'/>Clinica Grand Line</Navbar.Brand>
            <Nav className="d-flex">
              <Nav.Link as={Link} to='/profile'>
                {datosCredencialRdx?.credentials?.usuario?.email}
              </Nav.Link>
              <Nav.Link onClick={logoutFunction}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      ) : (
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
      )}
    </div>
  )
}
