const { request } = require('express')
const asyncHandler = require ('express-async-handler')

const User = require('../models/userModel')

//@desc  Get Users
// @route GET /api/users
// @access private
const getUsers = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }

  const users = await User.find()
  
  return res.status(200).json(users)
})

//@desc  Create Users
// @route POST /api/users
// @access private
const createUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  } 
  if (!req.body.email) {
    res.status(400)
    throw new Error('No email field in request')
  }
  const user = await User.create({
    email: req.body.email
  })
  res.status(200).json(user)
})

//@desc  Edit Specific User
// @route PUT /api/users/:id
// @access private
const editUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error('User not found');
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true, runValidators: true}
    )  
    res.status(200).json(updatedUser)
  } catch (e) {
    console.log(e.message)
  }
})


//@desc  Delete Specific User
// @route Delete /api/users/:id
// @access private
const deleteUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  
  const user = await User.findById(req.params.id)
  console.log(user)
  if (!user) {
    res.status(400)
    throw new Error('User not found');
  } 

  await user.remove()
  res.status(200).json( { id: req.params.id } )  
})



module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
}