const express = require('express')
const router  = express.Router()

router.use('/user', require('./userRoutes'))
router.use('/auth', require('./authRoutes'))


module.exports = router