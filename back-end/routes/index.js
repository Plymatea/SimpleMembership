const express = require('express')
const router  = express.Router()

router.use('/user', require('./userRoutes'))
router.use('/auth', require('./authRoutes'))
router.use('/payment', require('./paymentRoutes'))


module.exports = router