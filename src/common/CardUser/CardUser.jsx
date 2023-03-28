import React, { useEffect } from 'react'
import './CardUser.css'

import Card from 'react-bootstrap/Card';

export function CardUser ({usuario}) {

  return (
    <div>
        <Card >
            <Card.Body className='cardDesign'>
                <Card.Title>{usuario.name}</Card.Title>
                <Card.Text>
                    {usuario.surname}<br />
                    {usuario.phone}<br />
                    {usuario.email}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
