import React from 'react'
import './CardUser.css'

import Card from 'react-bootstrap/Card';

export function CardUser ({user}) {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{user}</Card.Title>
                <Card.Text>

                    {user} <br />
                    

                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
