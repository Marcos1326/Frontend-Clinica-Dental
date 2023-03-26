import React, { useEffect, useState } from 'react'
import './Admin.css'



import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { getAllUsersAdmin } from '../../services/apiCalls'
import { Container } from 'react-bootstrap'
import { CardUser } from '../../common/CardUser/CardUser'

export const Admin = () => {

  const [getUsers, setUsers] = useState([])

  const datosCredentialsRdx = useSelector(userData)

  useEffect(() => {

    if(getUsers.length == 0) {
      
      const getAllUsers = async () => {
        try {
          
          const usuarios = await getAllUsersAdmin(datosCredentialsRdx.credentials?.token);
          setUsers(usuarios.data)

        } catch (error) {
          console.log(error);
        }
      }
      getAllUsers();
    }

  }, [getUsers]);

  return (
    <div className='adminDesign'>
            <div >CLIENTS</div>
            <div >

            {getUsers.map(user => {
                return (
                        <CardUser key={user.id} usuario={user.User} />

                )
            })}
            </div>
    </div>
  )
}
