import React, { useState } from 'react'
import './Register.css'

import { InputText } from '../../common/Input/Input';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { registerMe } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate()

   // Hook 
  const [credenciales, setCredenciales] = useState({
    name:"",
    surname:"",
    phone:"",
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
  
  //Funcion que registra al usuario
  const registerfunction = () => {
    registerMe(credenciales)

    .then(
      userData => {
        setTimeout(() => {
          navigate("/login")
        },1000)
      }
    )
    .catch (error => console.log(error))
  }

  return (
    <div className='registerDesign'>
      <div>
        <Row className='txtImgDesignRegister'>
          <Col className='txtDesignRegister'>
            <p className='txt'>¡Bienvenido Nakama!</p>
          </Col>
          
        </Row>
        <Row>
          <Col>
            <img src="/src/img/pirata2.png" className='pirataDesign'/>
          </Col>
          <Col className='formDesign'> 
            <div className='inputsDesign'>
                <InputText
                type="text"
                name="name"
                placeholder="name"
                changeFunction={(e) => inputHandler(e)}
              />
            </div>
            <div className='inputsDesign'>
              <InputText
                type="text"
                name="surname"
                placeholder="surname"
                changeFunction={(e) => inputHandler(e)}
              />
            </div>
            <div className='inputsDesign'>
              <InputText
                type="text"
                name="phone"
                placeholder="phone"
                changeFunction={(e) => inputHandler(e)}
              />
            </div>
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
                placeholder="password"
                changeFunction={(e) => inputHandler(e)}
              />
            </div>
            <div className='inputsDesign'>
              <button variant="primary" className='botonDesign' onClick={() => registerfunction()}>
                Registrarse
              </button>
            </div>
          </Col>
          <Col >
            <img src="/src/img/pirata3.png" className='pirataDesign'/>
          </Col>
        </Row>
      </div>
    </div>
  )
}
