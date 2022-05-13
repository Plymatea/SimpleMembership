const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    }
  }, 
  {
    discordID: {
    type: String,
    required: true
    }
  }, 
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

const customerSchema = new mongoose.Schema(
  {
    stripeId: {
      type: String,
      required: false
    }
  },
  {
    subscriptionID: {
      type: String,
      required: false
    }
  },
  {
    subscriptionDate: {
      type: String,
      required: false
    }
  },
)

module.exports = mongoose.model('User', userSchema)