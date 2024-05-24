import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Asigură-te că această adresă este corectă
  timeout: 5000, // Mărește valoarea timeout-ului la 5000 ms (5 secunde)
  headers: { 'Content-Type': 'application/json' }
})

export default api
