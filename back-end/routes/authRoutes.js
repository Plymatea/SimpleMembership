const express = require('express')
const router  = express.Router()
const passport = require('passport')

// Below function to DRY up CODE below if it works right

// function NewlyCreatedUser(res) {
//   if (res.req.user.createdAt === res.req.user.updatedAt) {
//     res.redirect('http://localhost:3000/editmemberform')
//   } else {
//     res.redirect('http://localhost:3000/member')
//   }
// }

//  /api/auth/status

router.get("/status", (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

//  /api/auth/discord
router.get("/discord", passport.authenticate('discord', { prompt: "none" }));

//  /api/auth/discord/redirect
// This is hacky. But is the user "createdAt" && "updatedAt" fields are equal it will redirect to the edit member page. The idea here is that the only time these should be equal is when the user is first created. All other times these should be different thus, redirect to the member page instead. There must be a better way, but this works for now. 
router.get("/discord/redirect", passport.authenticate('discord'), (req, res) => {
  if (res.req.user.createdAt === res.req.user.updatedAt) {
    res.redirect('http://localhost:3000/editmemberform')
  } else {
    res.redirect('http://localhost:3000/member')
  }
});

//  /api/auth/google
router.get("/google", passport.authenticate('google', { scope: [ "email", "profile"] }));

router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
  if (res.req.user.createdAt === res.req.user.updatedAt) {
    res.redirect('http://localhost:3000/editmemberform')
  } else {
    res.redirect('http://localhost:3000/member')
  }
});

module.exports = router