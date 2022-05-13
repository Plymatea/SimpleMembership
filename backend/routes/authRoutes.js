const express = require('express')
const router  = express.Router()

router.get("/status", (req, res) => {
  res.send(200)
});

router.get("/discord", (req, res) => {
  // res.send(200)
});

router.get("/discord/redirect", (req, res) => {
  // res.send(200)
});


module.exports = router