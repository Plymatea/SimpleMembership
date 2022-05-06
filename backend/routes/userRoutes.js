const express = require('express')
const router  = express.Router()
const { getUsers, createUser, editUser, deleteUser} = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').put(editUser).delete(deleteUser)


module.exports = router