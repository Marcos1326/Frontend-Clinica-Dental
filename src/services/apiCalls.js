import axios from "axios"

// const root = "http://localhost:4000"
const root = "backend-clinica-dental-production.up.railway.app"

export const loginMe = async (body) => {
    return await axios.post(`${root}/login`, body)
}

export const registerMe = async (body) => {

    return await axios.post(`${root}/register`,body)
    
}

export const getUserData = async (token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer '+ token,  
        }
        };
    return await axios.get(`${root}/profile`,config)
    
}

export const createAppointments = async (token) => {
    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.post(`${root}/appointment`,config)
}

export const getAllAppointmentsUser = async (token) => {

    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.get(`${root}/appointment`,config)
}

export const getAllUsersAdmin = async (token) => {

    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.get(`${root}/adminuser`,config)
}