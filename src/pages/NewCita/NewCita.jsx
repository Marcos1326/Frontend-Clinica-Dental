import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../common/Input/Input';
import { createAppointments } from '../../services/apiCalls';
import './NewCita.css'

export const Citas = () => {

    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        date: "",
        hour: ""
    });

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const createAppointment = () => {

        createAppointments(credenciales)
            .then(
                userData => {
                    setTimeout(() => {
                        navigate("/citas")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }

  return (
    <div className='citasDesign'>
        <div className='newCitaDesign'>
            <div>NEW APPOINTMENT</div>

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
