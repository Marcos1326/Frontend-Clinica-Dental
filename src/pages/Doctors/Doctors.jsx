import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CardCita } from '../../common/CardCitas/CardCita';
import { getAllAppointmentsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './Doctors.css'

export const Doctors = () => {
  const navigate =useNavigate();
  const [getCitasDR, setCitasDR] = useState([])

  const datosCredencialRdx = useSelector(userData);

  const getAllCitasDR = async () => {
    try {
      const newcitas = await getAllAppointmentsDoctor(datosCredencialRdx.credentials?.token);
      setCitasDR(newcitas.data)
      console.log(newc);
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
          <div className='cardDesign'>
            {getCitasDR.map(CitasDr => {return <CardCita key={CitasDr.id} citas={CitasDr} />})}
          </div>
    </div>
    
  )
}
