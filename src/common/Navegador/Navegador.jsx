import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navegador.css'

export const Navegador = ({ruta, destino}) => {

    const navigate = useNavigate();

  return (
    <div className='navegadorDesign' onClick={()=> navigate(destino)}>
        {ruta}
    </div>
  )
}
