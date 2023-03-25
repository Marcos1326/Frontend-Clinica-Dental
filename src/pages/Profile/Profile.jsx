import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import './Profile.css'

export const Profile = () => {
  return (
    <div className='profileDesign'>
      <div className='infoProfile'>
        <Row>
          <Col className='colDesign'>
            <div className='infoProfile2'>
              <Row>
                <Col>
                  Name
                  <div className='cuadroTxtDesign'>
                    Name
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Surname
                  <div className='cuadroTxtDesign'>
                    Surname
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Phone
                  <div className='cuadroTxtDesign'>
                    Phone
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Email
                  <div className='cuadroTxtDesign'>
                    Email
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  password
                  <div className='cuadroTxtDesign'>
                    password
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
