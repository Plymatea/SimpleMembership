const mongoose = require('mongoose')

const OPTIONS = {
  virtuals: {
    fullName: {
      get() {
        return this.name.firstName + ' ' + this.name.lastName;
      }
    }
  },
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }
}

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
      unique: true,
    },
    googleID: {
      type: String,
      unique: true,
    },
    facebookID: {
      type: String,
      unique: true,
    },
    name: {
      firstName: String,
      lastName: String,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function(v) {
          // return /\d{3}-\d{3}-\d{4}/.test(v);
          return (((/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
          ).test(v)) || v == "");
        },
        message: props => `${props.value} is not a valid phone number. 123-456-7890 ex`
      },
    },
    mailingAddress: { 
      addressLine1: String, 
      addressLine2: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    waiver: {
      signed: {
        type: Boolean,
        default: false,
      },
      dateSigned: Date,
    },
    subscriptions: String,
    hemaExpirationDate: {
      type: Date,
      min: mongoose.now
    },
  }, 
  OPTIONS, 
  {timestamps: true}
)

module.exports = mongoose.model('User', UserSchema)
