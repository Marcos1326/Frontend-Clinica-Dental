import React, { useState, useEffect } from 'react'
import './Login .css'

import Button from 'react-bootstrap/Button';
import { InputText } from '../../common/Input/Input';
import { loginMe } from '../../services/apiCalls';
import { decodeToken } from 'react-jwt';

export const Login = () => {

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
  const logeame = async () => {
      try {
        console.log('1');
        const loginResult = await loginMe(credenciales)
        console.log(loginResult);

        if (loginResult.data.success) {
          try {
            console.log(loginResult);
            const decoded = decodeToken(loginResult)
          } catch (error) {
            
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  

  return (
    <div className='loginDesign'>
      <div className='imputsDesign'>
            <InputText
              type="email"
              name="email"
              placeholder="escribe un email"
              changeFunction={(e) => inputHandler(e)}
            />
            <InputText
            type="password"
            name="password"
            placeholder="pasword"
            changeFunction={(e) => inputHandler(e)}
            />
          <Button variant="primary" onClick={() => logeame()}>
            Iniciar sesión
          </Button>
      </div>
    </div>
  )
}
