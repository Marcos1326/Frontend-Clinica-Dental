import React from 'react'
import './Register.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = () => {
  return (
    <div className='registerDesign'>
      <div className='formDesign'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="surname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
      </Form>
      </div>
    </div>
  )
}
