const asyncHandler = require ('express-async-handler')

//@desc  Get Members
// @route GET /api/goals
// @access private

const getMembers = asyncHandler(async (req, res) => {
  res.status(200).json({"message": 'get members'})
})

//@desc  Create Members
// @route POST /api/goals
// @access private

const createMember = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('No text field in request')
  }
  res.status(200).json({"message": 'Create members'})
})

//@desc  Edit Specific Member
// @route PUT /api/goals/:id
// @access private

const editMember = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `update member ${req.params.id}`})
})

//@desc  Delete Specific Member
// @route Delete /api/goals/:id
// @access private

const deleteMember = asyncHandler(async (req, res) => {
  res.status(200).json({"message": `delete member ${req.params.id}`})
})

module.exports = {
  getMembers,
  createMember,
  editMember,
  deleteMember,
}