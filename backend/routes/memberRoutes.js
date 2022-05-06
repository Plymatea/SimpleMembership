const express = require('express')
const router  = express.Router()
const { getMembers, createMember, editMember, deleteMember} = require('../controllers/memberController')

router.route('/').get(getMembers).post(createMember)
router.route('/:id').put(editMember).delete(deleteMember)


module.exports = router