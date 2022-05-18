const mongoose = require('mongoose')
console.log("###### reminder that the mailing address needs to be fixed here. usermodel.js")
const UserSchema = new mongoose.Schema(
  { 
  email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    discordID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      uppercase: true,
      set: () => Object.defineProperty(this, 'name', {
        value: this.firstName + " " + this.lastName,
        writable: true,
      }),
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    homePhoneNumber: {
      type: String,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
    },
    mobilePhoneNumber: {
      type: String,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
    },
    //  Mailing address copied from Name. I want to test the set feature first. 
    mailingAddress: { 
      type: String,
      set: () => Object.defineProperty(this, 'name', {
        value: this.firstName + " " + this.lastName,
        writable: true,
      }),
    },
    waiver: {
      signed: {
        type: Boolean,
        default: false,
      },
      dateSigned: {
        type: Date,
      }
    },
    membershipStatus: {
      type: String,
      default: "Trial"
    },
    hemaExpirationDate: {
      type: Date,
      min: mongoose.now
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