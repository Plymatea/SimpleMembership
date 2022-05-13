const express = require('express')
const session = require('express-session')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// Middleware for parsing request bodies
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))

app.use(session({
  cookie: {
    maxAge: 1000*60*60*24,  //  milli-secs in 24 hours
  },
  saveUninitialized: false,
  resave: false, 
  secret: process.env.EXPRESS_SESSION_SECRET,
}))

// Routes
app.use('/api/', require('./routes/index'))
app.use(errorHandler)

// Start listener on Port
app.listen(port, () => console.log(`Server started on port: ${port}`))

