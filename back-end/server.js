const dotenv = require('dotenv').config()
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
require ('./passportStrategies/discord')
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.BACKEND_PORT || 5000


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
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGO_URI
  })
}))

//passport strategies
app.use(passport.initialize());
app.use(passport.session())

// Routes
app.use('/api/', require('./routes/index'))
app.use(errorHandler)

// Start listener on Port
app.listen(port, () => console.log(`Server started on port: ${port}`))


