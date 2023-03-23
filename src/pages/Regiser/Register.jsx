import React, { useState } from 'react'
import './Register.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputText } from '../../common/Input/Input';

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
      <div className='formDesign'>
            <InputText
              type="text"
              name="name"
              placeholder="name"
              changeFunction={(e) => inputHandler(e)}
            />
            <InputText
              type="text"
              name="surname"
              placeholder="surname"
              changeFunction={(e) => inputHandler(e)}
            />
            <InputText
              type="text"
              name="phone"
              placeholder="phone"
              changeFunction={(e) => inputHandler(e)}
            />
            <InputText
              type="email"
              name="email"
              placeholder="escribe un email"
              changeFunction={(e) => inputHandler(e)}
            />
            <InputText
              type="password"
              name="password"
              placeholder="password"
              changeFunction={(e) => inputHandler(e)}
            />
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
      </div>
    </div>
  )
}
