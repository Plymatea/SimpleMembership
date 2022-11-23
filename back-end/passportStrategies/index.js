const passport = require('passport')
const User = require('../models/userModel')
require('./discord')
require('./google')
require('./facebook')

passport.serializeUser((user, done) => {
  console.log("serializing user")
  console.log(user)
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  console.log("DE-serializing user")
  try {
    const userDB = await User.findOne({ id })
    return userDB ? done(null, userDB) : done(null, null)
  } catch (err) {
    console.log(err)
    return done(err, null)
  }
})