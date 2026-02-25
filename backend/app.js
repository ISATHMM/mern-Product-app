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


app.listen(3000)
