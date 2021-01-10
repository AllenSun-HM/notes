import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

let token = null
let config = null

axios.interceptors.request.use(function (config) {
  config.headers.token = 'added by interceptor';
  return config;
});

axios.interceptors.response.use(function (data) {
  return data;
});



const setToken = newToken => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }

}

const getAll = (id) => {
  const request = axios.get(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
  
}

const create = async newObject => {
  console.log(token+'   logged at noteservice create function')
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

const deleteNote = async (id) => {
  const deleteUrl = `${baseUrl}/${id}`
  const response = await axios.delete(deleteUrl, config)
  console.log(response.data)
  return response.data
}

export default { getAll, create, update, setToken, deleteNote }