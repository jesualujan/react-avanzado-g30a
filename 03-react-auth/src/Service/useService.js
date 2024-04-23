// AQUÍ HACEMOS LA LLAMADA A LA API Y USAMOS AXIOS
// LE PASAMOS UN ENDPOINT PARA QUE TRAIGA LA DATA DE LA API

//* 1) IMPORTAMOS AXIOS
import axios from 'axios'

//* 2) ESTABLECEMOS NUESTRO ENDPOINT
//  SNAKE_UPPERCASE -> para entornos o variables globales

const BASE_URL = 'http://localhost:3000' // esta la podemos cambiar si subimos el repo de github a render

// ocupamos mandar información
// registrar un usuario
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)

// login
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

// información de un solo usuario
const getMeUserService = (jwtToken) => axios.get(`${BASE_URL}/users/me`, { headers: { Authorization: `Bearer ${jwtToken}` } })

export {
  registerUserService,
  loginUserService,
  getMeUserService
}
