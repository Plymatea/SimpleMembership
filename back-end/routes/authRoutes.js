const express = require('express')
const router  = express.Router()
const passport = require('passport')

//  /api/auth/status

router.get("/status", (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

//  /api/auth/discord
router.get("/discord", passport.authenticate('discord'));

//  /api/auth/discord/redirect
router.get("/discord/redirect", passport.authenticate('discord'), (req, res) => {
  res.redirect('http://localhost:3000/member')
});


module.exports = router