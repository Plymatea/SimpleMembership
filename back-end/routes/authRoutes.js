const express = require('express')
const router  = express.Router()
const passport = require('passport')

//  /api/auth/status

router.get("/status", (req, res) => {
  res.send({
    user: req.user,
    sessionID: req.sessionID
  });
});

//  /api/auth/discord
router.get("/discord", passport.authenticate('discord'));

//  /api/auth/discord/redirect
router.get("/discord/redirect", passport.authenticate('discord'), (req, res) => {
  res.sendStatus(200)
});


module.exports = router