import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { CardCita } from '../../common/CardCitas/CardCita';
import { getAllAppointmentsDoctor, getAllAppointmentsUser } from '../../services/apiCalls';
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
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if(getCitasDR.length === 0) {
      getAllCitasDR();
    }
  }, []);
  
  return (
    <div className='doctorDesign'>
          <div className='cardDesign'>
            {getCitasDR.map(Citas => {return <CardCita key={Citas.id} citas={Citas} />})}
          </div>
    </div>
    
  )
}
