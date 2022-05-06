const asyncHandler = require ('express-async-handler')

//@desc  Get Users
// @route GET /api/goals
// @access private

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({"message": 'get users'})
})

//@desc  Create Users
// @route POST /api/goals
// @access private

const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('No text field in request')
  }
  res.status(200).json({"message": 'Create users'})
})

//@desc  Edit Specific User
// @route PUT /api/goals/:id
// @access private

const editUser = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `update user ${req.params.id}`})
})

//@desc  Delete Specific User
// @route Delete /api/goals/:id
// @access private

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `delete user ${req.params.id}`})
})

module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
}