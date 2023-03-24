import React, { useState, useEffect } from 'react'
import './Login.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { InputText } from '../../common/Input/Input';
import { loginMe } from '../../services/apiCalls';
import { decodeToken } from 'react-jwt';
import { login } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Hook 
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });
  
  // Imput handler para los imputs de login seteo de credentials 
  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  };
  
  // funcion para loguear 
  const logeame = () => {
      try {
        const loginResult =  loginMe(credenciales)
        .then((respuesta) => {
          const decoded = decodeToken(respuesta.data.data)
          let datosBack = {
            token: respuesta.data.data,
            usuario: decoded
          }
          console.log(datosBack);
          
          //redux credecniales
            dispatch(login({ credentials: datosBack}));
            
          // useNavigate to /home
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => console.log(error))

      } catch (error) {
        console.log(error);
      }
    }
  

  return (
    <div className='loginDesign'>
      <div>
        <Row>
        <Col className='txtDesignLogin'>
            <p className='txtLogin'>¡Me alegra verte de nuevo!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/src/img/pirata4.png" className='pirataDesign'/>
          </Col>
          <Col className='formDesign'>
            <div className='inputsDesign'>
              <InputText
                type="email"
                name="email"
                placeholder="escribe un email"
                changeFunction={(e) => inputHandler(e)}
              />
            </div>
            <div className='inputsDesign'>
              <InputText
              type="password"
              name="password"
              placeholder="pasword"
              changeFunction={(e) => inputHandler(e)}
              />
            </div>
            <div className='inputsDesign'>
              <button variant="primary" className='botonDesignLogin' onClick={() => logeame()}>
                Log Me
              </button>
            </div>
          </Col>
          <Col>
            <img src="/src/img/diente.png" className='pirataDesign'/>
          </Col>
        </Row>
      </div>
    </div>
  )
}
