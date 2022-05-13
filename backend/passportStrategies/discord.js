
const passport = require('passport')
const { Strategy } = require('passport-discord')
const User = require('../models/userModel')
// const { getUsers, createUser, editUser, deleteUser} = require('../controllers/userController');
// const { create } = require('../models/userModel');



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
        const userDB = await User.findOne ({ id });
        if (!userDB) {
          const newUser = await User.create({ id, email})
          console.log(newUser)
        }
        return done(null, userDB)
      } catch (err) {
        return done(err, null)
      }
    }
  )
);