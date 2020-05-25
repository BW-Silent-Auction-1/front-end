import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'backend api goes here',
    headers: {
      Authorization: token
    }
  }) 
}