//@desc  Get Members
// @route GET /api/goals
// @access private

const getMembers = (req, res) => {
  res.status(200).json({"message": 'get members'})
}

//@desc  Create Members
// @route POST /api/goals
// @access private

const createMember = (req, res) => {
  res.status(200).json({"message": 'Create members'})
}

//@desc  Edit Specific Member
// @route PUT /api/goals/:id
// @access private

const editMember = (req, res) => {
  res.status(200).json({"message": `update member ${req.params.id}`})
}

//@desc  Delete Specific Member
// @route Delete /api/goals/:id
// @access private

const deleteMember = (req, res) => {
  res.status(200).json({"message": `delete member ${req.params.id}`})
}

module.exports = {
  getMembers,
  createMember,
  editMember,
  deleteMember,
}