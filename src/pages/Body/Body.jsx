import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../Admin/Admin'
import { Citas } from '../Citas/Citas'
import { Doctors } from '../Doctors/Doctors'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Patients } from '../Patients/Patients'
import { Profile } from '../Profile/Profile'

import { Register } from '../Regiser/Register'

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/doctor' element={<Doctors />}/>
        <Route path='/patient' element={<Patients />}/>
        <Route path='/citas' element={<Citas />}/>
      </Routes>
    </>
  )
}
