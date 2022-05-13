const express = require('express')
const router  = express.Router()
const passport = require('passport')

//  /api/auth/status

router.get("/status", (req, res) => {
  res.send(200)
});

//  /api/auth/discord
router.get("/discord", passport.authenticate('discord'));

//  /api/auth/discord/redirect
router.get("/discord/redirect", passport.authenticate('discord'), (req, res) => {
  // res.send(200)
});


module.exports = router