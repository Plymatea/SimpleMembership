const express = require('express')
const router  = express.Router()
const { getMembers, createMember, editMember, deleteMember} = require('../controllers/memberController')


router.get('/', getMembers)

router.post('/', createMember)

router.put('/:id', editMember)

router.delete('/:id', deleteMember)

module.exports = router