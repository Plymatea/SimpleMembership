const passport = require('passport')
const  GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/userModel')

const passportGoogle = () => {
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
        const params = { $or:[ 
          {email: emails[0].value }, 
          { googleID: id }
        ]}
        const userDB = await User.findOne(params);
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
        if (!userDB.googleID || !userDB.firstName || !userDB.lastName || !userDB.email) {
          const updates = {
            email: userDB.email || emails[0].value,
            googleID: userDB.googleID || id,
            firstName: userDB.firstName || name.givenName,
            lastName: name.familyName || name.familyName
          }
          const options = {
            returnDocument:"after"
          }
          const res = await User.findByIdAndUpdate(userDB.id, updates, options)
        }
        return done(null, userDB)
      } catch (err) {
        return done(err, null)
      }
    }
  )
)};

module.exports = passportGoogle()