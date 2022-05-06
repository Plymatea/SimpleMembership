const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))


// Member Routes
app.use('/api/member', require('./routes/memberRoutes'))
app.use(errorHandler)

// Start listener on Port
app.listen(port, () => console.log(`Server started on port: ${port}`))

