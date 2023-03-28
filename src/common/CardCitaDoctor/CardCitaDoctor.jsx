import React from 'react'
import './CardCitaDorctor.css'

import Card from 'react-bootstrap/Card';

export function CardCitaDoctor ({citasDR}) {

  return (
    <div>
        <Card >
            <Card.Body className='cardDesignApp'>
                <Card.Title><h3>Cita: {citasDR.id}</h3></Card.Title>
                <Card.Text className='txtDesignCard'>
                    Dia: {citasDR.date}<br />
                    Hora: {citasDR.hour}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}