const getMembers = (req, res) => {
  res.status(200).json({"message": 'get members'})
}

const createMember = (req, res) => {
  res.status(200).json({"message": 'Create members'})
}

const editMember = (req, res) => {
  res.status(200).json({"message": `update member ${req.params.id}`})
}

const deleteMember = (req, res) => {
  res.status(200).json({"message": `delete member ${req.params.id}`})
}

module.exports = {
  getMembers,
  createMember,
  editMember,
  deleteMember,
}