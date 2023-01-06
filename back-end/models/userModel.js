const mongoose = require('mongoose')

const OPTIONS = {
  virtuals: { },
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true },
  timestamps: true,
}

const UserSchema = new mongoose.Schema(
  { 
    email: {
      type: String,
      lowercase: true,
      required: true,  //Only required field, application uses this field to check for duplicates
      unique: true,
    },
    stripeID: {
      type: String,
      unique: true
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
    hemaExpirationDate: {
      type: Date,
      min: mongoose.now
    },
    subscriptions: String,
  }, 
  OPTIONS
)

UserSchema.virtual('name.fullName').get( function() {
  return (this.name.firstName + ' ' + this.name.lastName)
})
UserSchema.virtual('mailingAddress.fullMailingAddress').get( function() {
  const p = this.mailingAddress
  const result = ''.concat(
    p.addressLine1,'\n',
    (p.addressLine2 ? p.addressLine2 + '\n': ""),
    p.city, ", ", p.state, " ", p.zipCode, '\n',
    p.country
  )
  return result
})

module.exports = mongoose.model('User', UserSchema)
