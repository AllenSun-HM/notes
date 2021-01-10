import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const loginService = async credentials => {

  const response = await axios.post(baseUrl, credentials)
  console.log(typeof response)
  console.log(response.data)
  return response.data
}

export default { loginService }
