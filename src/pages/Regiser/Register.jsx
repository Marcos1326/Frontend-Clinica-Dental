import React, { useState } from 'react'
import './Register.css'

import Button from 'react-bootstrap/Button';
import { InputText } from '../../common/Input/Input';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Register = () => {

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
  
  return (
    <div className='registerDesign'>
      <div>
        <Row>
          <Col className='formDesign'>
            <div className='colimgDesign'>
              img1
            </div>
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
              <Button variant="primary" type="submit">
                Registrarse
              </Button>
            </div>
            
          </Col>
          <Col className='formDesign '>
            <div className='colimgDesign'>
              img2
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
