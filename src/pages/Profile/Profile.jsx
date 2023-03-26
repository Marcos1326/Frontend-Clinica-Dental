import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import { useSelector } from 'react-redux'
import { getUserData } from '../../services/apiCalls'
import { userData } from '../userSlice'
import './Profile.css'

export const Profile = () => {

  const [users, setUsers] = useState ({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const ReduxCredentials = useSelector(userData);

  useEffect(()=>{
    if(users.name === ""){
      getUserData(ReduxCredentials.credentials.token)
      .then((result)=>{
        setUsers({
          name: result.data.name,
          surname: result.data.surname,
          phone: result.data.phone,
          email: result.data.email,
        });
      })
      .catch((error)=>console.log(error))
    }
  },[users]);
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
                    {users.name}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Surname
                  <div className='cuadroTxtDesign'>
                    {users.surname}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Phone
                  <div className='cuadroTxtDesign'>
                    {users.phone}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  Email
                  <div className='cuadroTxtDesign'>
                    {users.email}
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
