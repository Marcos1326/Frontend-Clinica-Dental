import React from 'react'
import './CardUser.css'

import Card from 'react-bootstrap/Card';

export function CardUser ({usuario}) {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{usuario}</Card.Title>
                <Card.Text>

                    {usuario.surname} <br />
                    {usuario} <br />
                    

                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
