//* 1) IMPORTAMOS AXIOS
import axios from 'axios'

//* 2) ESTABLECEMOS NUESTRO ENDPOINT
//  SNAKE_UPPERCASE -> para entornos o variables globales

const BASE_URL = 'http://localhost:3000'

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data,
  { headers: { Authorization: `Bearer ${jwtToken}` } })

export {
  getAllItemsService,
  getOneItemService,
  createItemService
}
