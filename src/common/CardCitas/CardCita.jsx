import React from 'react'
import './CardCita.css'

import Card from 'react-bootstrap/Card';

export function CardCita ({citas}) {

  return (
    <div>
        <Card >
            <Card.Body className='cardDesignApp'>
                <Card.Title>Cita: {citas.id}</Card.Title>
                <Card.Text className='txtDesignCard'>
                    Dia: {citas.date}<br />
                    Hora: {citas.hour}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
