
const passport = require('passport')
const  DiscordStrategy = require('passport-discord').Strategy
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
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK_URL || process.env.DISCORD_CALLBACK_URL,
      scope: ["email", "identify"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const { email, id } = profile
      try {
        const params = { $or:[ 
          { email: email }, 
          { discordID: id }
        ]}
        const userDB = await User.findOne(params);
        if (!userDB) {
          const newUser = await User.create({ email: email, discordID: id })
          return done(null, newUser)
        }
        console.log('user found!!!!!'.bgBlue)
        if (!userDB.discordID || !userDB.email) {
          const updates = {
            email: userDB.email || email,
            discordID: userDB.discordID || id,
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
);