const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  { 
  email: {
      type: String,
      required: true,
    },
    discordID: {
      type: String,
      required: true,
    },
  }, 
  {timestamps: true}
)

// const customerSchema = new mongoose.Schema(
//   {
//     stripeId: {
//       type: String,
//       required: false
//     }
//   },
//   {
//     subscriptionID: {
//       type: String,
//       required: false
//     }
//   },
//   {
//     subscriptionDate: {
//       type: String,
//       required: false
//     }
//   },
// )

module.exports = mongoose.model('User', UserSchema)