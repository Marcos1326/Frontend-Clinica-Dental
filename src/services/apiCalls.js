import axios from "axios"

const root = "http://localhost:4000"

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

