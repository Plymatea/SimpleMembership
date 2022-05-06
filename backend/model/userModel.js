const mongoose = ('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email']
    }
  }, 
  {
    firstName: {
    type: String,
    required: [true, 'Please enter your email']
    }
  }, 
  {
    lastName: {
    type: String,
    required: [true, 'Please enter your email']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)