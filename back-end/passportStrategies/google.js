
const passport = require('passport')
const  GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/userModel')

passport.serializeUser((user, done) => {
  console.log("serializing user")
  console.log(user)
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  console.log("DE-serializing user")
  try {
    const userDB = await User.findOne({ id })
    console.log(userDB.id)
    return userDB ? done(null, userDB) : done(null, null)
  } catch (err) {
    console.log(err)
    return done(err, null)
  }
})


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK_URL || process.env.GOOGLE_CALLBACK_URL,
      scope: ["email", "profile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const { emails, id, name } = profile
      try {
        const userDB = await User.findOne({ googleID: id });
        if (!userDB) {
          const newUser = await User.create({ 
            email: emails[0].value, 
            googleID: id,  
            firstName: name.givenName, 
            lastName: name.familyName
          })
          return done(null, newUser)
        }
        console.log('user found!!!!!'.bgBlue)
        return done(null, userDB)
      } catch (err) {
        return done(err, null)
      }
    }
  )
);