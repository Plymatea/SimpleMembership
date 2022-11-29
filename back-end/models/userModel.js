const mongoose = require('mongoose')

const VIRTUALS = {
  virtuals: {
    fullName: {
      get() {
        return this.name.firstName + ' ' + this.name.lastName;
      }
    }
  }
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
    fullName: {   //Doesn't work
      type: String, 
      set: () => Object.defineProperty(this, 'fullName', {
        value: (this.name.firstName + ' ' + this.name.lastName),
        writeable: true,
      }),
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
  // VIRTUALS, 
  {timestamps: true}
)

// UserSchema.virtual('fullName')
//   get(function() {
//     return this.name.first + ' ' + this.name.last;
//   }).
//   set(function(v) {
//     this.name.first = v.substr(0, v.indexOf(' '));
//     this.name.last = v.substr(v.indexOf(' ') + 1);
//   });

module.exports = mongoose.model('User', UserSchema)