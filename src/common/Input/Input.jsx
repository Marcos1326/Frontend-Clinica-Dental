import React from 'react'
import './input.css'

export const InputText = ({
    type,
    placeholder,
    name,
    changeFunction,
    validateFunction
}) => {
    return (
        <>
            <input
                className='inputDesign'
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={changeFunction}
                onBlur={validateFunction}
            />
        </>
    )
}