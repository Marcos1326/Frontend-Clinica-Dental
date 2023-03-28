import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CardCita } from '../../common/CardCitas/CardCita';
import { getAllAppointmentsUser } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './Citas.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Citas = () => {
  
  const navigate =useNavigate();
  const [getCitas, setCitas] = useState([])

  const datosCredencialRdx = useSelector(userData);

  const getAllCitas = async () => {
    try {
      const newcitas = await getAllAppointmentsUser(datosCredencialRdx.credentials?.token);
      setCitas(newcitas.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if(getCitas.length === 0) {
      getAllCitas();
    }
  }, []);
  
  return (
    <div className='citasDesign'>
      <Row>
        <Col className='txtDesignCitas'>
        <div>Tus citas</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='cardDesignAdmin'>
            {getCitas.map(Citas => {return <CardCita key={Citas.id} citas={Citas} />})}
          </div>
        </Col>
      </Row>
    </div>
    
  )
}
