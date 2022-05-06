const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email']
    }
  }, 
  // {
  //   firstName: {
  //   type: String,
  //   required: [true, 'Please enter your first name']
  //   }
  // }, 
  // {
  //   lastName: {
  //   type: String,
  //   required: [true, 'Please enter your last name']
  //   }
  // },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)