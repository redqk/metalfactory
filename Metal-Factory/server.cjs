const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

// Endpoint pentru produse
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ]
  res.json(products)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
