
const passport = require('passport')
const { Strategy } = require('passport-discord')
const User = require('../models/userModel')

passport.serializeUser((user, done) => {
  console.log("serializing user")
  console.log(user)
  done(null, user.id)
})

// passport.deserializeUser(async (discordID, done) => {
//   console.log("DE-serializing user")
//   console.log(discordID)
//   try {
//     const userDB = await User.findOne({ discordID })
//     return userDB ? done(null, userDB) : done(null, null)
//   } catch (err) {
//     console.log(err)
//     return done(err, null)
//   }
// })


passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ["email", "identify"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const { email, id } = profile
      try {
        const userDB = await User.findOne({ id });
        console.log("userdb: " + userDB)
        if (!userDB) {
          console.log("User not FOund in DB:  Creating New User".bgMagenta)
          console.log("this is the discord id " + id)
          const newUser = await User.create([{ email, id }])
          console.log(newUser)
        }
        console.log('user found!!!!!'.bgBlue)
        return done(null, userDB)
      } catch (err) {
        return done(err, null)
      }
    }
  )
);