import axios from "axios"

const root = "http://localhost:4000"

export const loginMe = async (body) => {
    return await axios.post(`${root}/login`, body)
}

export const registerMe = async (body) => {

    return await axios.post(`${root}/register`,body)
    
}
export const profile = async (body) => {

    return await axios.get(`${root}/profile`,body)
    
}