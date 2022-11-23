const passport = require('passport')
const  FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/userModel')

const passportFacebook = () => {
  passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK_URL || process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "email", "displayName"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const { emails, id } = profile
      try {
        const params = { $or:[ 
          { email: emails[0].value }, 
          { facebookID: id }
        ]}
        const userDB = await User.findOne(params);
        if (!userDB) {
          const newUser = await User.create({ email: emails[0].value, facebookID: id })
          return done(null, newUser)
        }
        console.log('user found!!!!!'.bgBlue)
        if (!userDB.facebookID || !userDB.email) {
          const updates = {
            email: userDB.email || emails[0].value,
            facebookID: userDB.facebookID || id,
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

module.exports = passportFacebook()