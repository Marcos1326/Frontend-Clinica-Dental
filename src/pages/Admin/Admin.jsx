import React, { useEffect, useState } from 'react'
import './Admin.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { getAllUsersAdmin } from '../../services/apiCalls'
import { CardUser } from '../../common/CardUser/CardUser'

export const Admin = () => {

  const [getUsers, setUsers] = useState([])

  const datosCredentialsRdx = useSelector(userData)
  
  const getAllUsers = async () => {
    try {
      const usuarios = await getAllUsersAdmin(datosCredentialsRdx.credentials?.token);
      setUsers(usuarios.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(getUsers.length === 0) {
      getAllUsers();
    }
  }, []);

  return (
    <div className='adminDesign'>
      <Row>
        <Col className='txtDesignAdmin'>
          <div>Usuarios Registrados</div>
        </Col>
      </Row>
      <Row >
        <Col className='carduserDesign'>
          <div className='cardDesignAdmin'>
            {getUsers.map(user => {return <CardUser key={user.id} usuario={user} />})}
          </div>
        </Col>
      </Row>
    </div>
  )
}
