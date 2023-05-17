import axios from 'axios'

export const apiClient = () => {
  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    withCredentials: true,
    responseType: 'json',
  })
  return apiClient
}
