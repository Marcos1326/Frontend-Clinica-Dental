import React, { useEffect } from 'react'
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../../pages/userSlice';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Header = () => {

  const dispatch = useDispatch();

  const datosCredencialRdx = useSelector(userData);

  const navigate = useNavigate();

//Funcion logout y redireccion a home
  const logoutFunction = () => {
    dispatch(userout({credentials: {}, token: ""}))

    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return (
    <div className='headerDesign'>
      <div className='navbarDesign'>
        <Navbar bg="dark" variant="dark" >
          <Container className='txtDesign'>
            <Navbar.Brand as={Link} to='/'><img src="/src/img/diente.png" className='imgNavbar'/>Clinica Grand Line</Navbar.Brand>
            <Nav className="d-flex">        
              {datosCredencialRdx?.credentials?.usuario?.roleId === 3 ? (
                    <div>
                      <DropdownButton align="end" title="Perfil" id="dropdown-menu-align-end" menuVariant="dark">
                        <Dropdown.Item eventKey="1" as={Link} to='/profile' onClick={()=>selected()}>
                          <div>{datosCredencialRdx?.credentials?.usuario?.email}</div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" as={Link} to='/newcita' >
                          Citas
                        </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2" onClick={logoutFunction}>
                        Logout
                      </Dropdown.Item>
                      </DropdownButton>
                    </div>
                ) : datosCredencialRdx?.credentials?.usuario?.roleId === 2 ? (
                    <div>
                      <DropdownButton align="end" title="Perfil" id="dropdown-menu-align-end" menuVariant="dark">
                        <Dropdown.Item eventKey="1" as={Link} to='/profile' onClick={()=>selected()}>
                          <div>{datosCredencialRdx?.credentials?.usuario?.email}</div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" as={Link} to='/doctor' >
                          Pacientes
                        </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3" onClick={logoutFunction}>
                        Logout
                      </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  ) : datosCredencialRdx?.credentials?.usuario?.roleId === 1 ? (
                    <div>
                      <DropdownButton align="end" title="Perfil" id="dropdown-menu-align-end" menuVariant="dark">
                        <Dropdown.Item eventKey="1" as={Link} to='/profile' onClick={()=>selected()}>
                          <div>{datosCredencialRdx?.credentials?.usuario?.email}</div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" as={Link} to='/admin' >
                          Admin
                        </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3" onClick={logoutFunction}>
                        Logout
                      </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    ) : (
                    <div className='contDesign'>
                      <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                      <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </div>
                  )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}
