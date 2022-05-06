const mongoose = ('mongoose')

const memberSchema = mongoose.Schema(
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