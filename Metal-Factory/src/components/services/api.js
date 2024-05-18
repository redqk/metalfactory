import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.example.com' // Înlocuiește cu URL-ul real al backend-ului tău
})

export default api
