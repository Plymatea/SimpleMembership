const express = require('express')
const router  = express.Router()
const passport = require('passport')

// At Authentication the user will get a prop newlyCreated = true if routed through creation of new user.  Otherwise this prop returns falsy
function NewlyCreatedUser(res) {
  console.log("NEWLY CREATED USER", res.req.user);
  if (res.req.user.newlyCreated) {
    return res.redirect('http://localhost:3000/editmemberform')
  }
  return res.redirect('http://localhost:3000/member')
}

//  /api/auth/status
router.get("/status", (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

//  /api/auth/discord
router.get("/discord", passport.authenticate('discord', { prompt: "none" }));

router.get("/discord/redirect", passport.authenticate('discord'), (req, res) => {
  NewlyCreatedUser(res)
});

//  /api/auth/google
router.get("/google", passport.authenticate('google', { scope: [ "email", "profile"] }));

router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
  NewlyCreatedUser(res)
});

//  /api/auth/facebook
router.get("/facebook", passport.authenticate('facebook', { authType: 'reauthenticate', scope: [ "email" ] }));

router.get("/facebook/redirect", passport.authenticate('facebook'), (req, res) => {
  NewlyCreatedUser(res)
});

module.exports = router