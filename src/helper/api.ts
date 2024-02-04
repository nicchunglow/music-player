import axios from 'axios'

export const customAxios = axios.create({
  timeout: 30000,
  baseURL: process.env.BASE_URL, // No need for `${baseURL}` if it's just a string
  headers: {
    'Content-Type': 'application/json',
  },
})
