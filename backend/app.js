const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require("cors")

const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

connectDB()

app.use('/products', productRoutes)

// ✅ IMPORTANT FIX
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})