import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CardCita } from '../../common/CardCitas/CardCita';
import { getAllAppointmentsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';
import { Row } from 'react-bootstrap';
import Col from "react-bootstrap/Col";

import './Doctors.css'


export const Doctors = () => {
  const navigate =useNavigate();
  const [getCitasDR, setCitasDR] = useState([])

  const datosCredencialRdx = useSelector(userData);

  const getAllCitasDR = async () => {
    try {
      const newcitas = await getAllAppointmentsDoctor(datosCredencialRdx.credentials?.token);
      setCitasDR(newcitas.data)
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    if (getCitasDR.length === 0) {
      getAllAppointmentsDoctor(datosCredencialRdx.credentials.token)
        .then((respuesta) => {
          setCitasDR(respuesta.data);
        })
        .catch((error) => console.log(error));
    }
  }, [getCitasDR]);
  
  return (
    <div className='doctorDesign'>
      <Row>
        <Col className="txtDesignAdmin">
          <div>Citas</div>
        </Col>
      </Row>
      <Row className="cardDesignAdmin justify-content-center mb-4">
        {getCitasDR.map(CitasDr => {
          return (
            <Col key={CitasDr.id} md={3} s={11}>
              <CardCita citas={CitasDr} />
            </Col>
            )
          })}
      </Row>
    </div>
    
  )
}
