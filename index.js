const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/products', (req, res) => {
    res.json([
        {productId: 543, productName: 'Tablet', productPrice: 499.99},
        {productId: 856, productName: 'Telefon', productPrice: 299.99},
        {productId: 623, productName: 'Komputer', productPrice: 1399.99},
    ])
})
