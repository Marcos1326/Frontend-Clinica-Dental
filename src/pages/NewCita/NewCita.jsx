import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../common/Input/Input';
import { createAppointments } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './NewCita.css'

export const NewCita = () => {

    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        doctor_id: 2,
        date: "",
        hour: ""
    });

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const ReduxCredentials = useSelector(userData);

    const createAppointment = () => {

        createAppointments(credenciales,ReduxCredentials.credentials.token)
            .then(
                userData => {
                    setTimeout(() => {
                        navigate("/cita")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }

  return (
    <div className='citasDesign'>
        <div className='newCitaDesign'>
            <div className='txtDesign'>Crea tu cita aquí</div>

            <InputText
                type="date"
                name="date"
                placeholder="escribe la fecha"
                changeFunction={(e) => inputHandler(e)}
            />

            <InputText
                type="text"
                name="hour"
                placeholder="escribe la hora"
                changeFunction={(e) => inputHandler(e)}
            />
            <button variant="primary" className='botonDesign' onClick={() => createAppointment()}>
                Crear Cita
            </button>
        </div>
    </div>
  )
}
