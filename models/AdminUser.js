const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  reviews: [
    {
      text: {
        type: String
      },
      name: {
        type: String
      },
      year: {
        type: Date
      }
    }
  ],
  leads: [
    {
      lead: {
        type: Schema.Types.ObjectId,
        ref: "leads"
      },
      name: {
        type: String
      },
      email: {
        type: String
      },
      message: {
        type: String
      }
    }
  ],

  listings: [
    {
      saleRent: {
        type: String
        // required: true
      },
      price: {
        type: Number
        // required: true
      },
      beds: {
        type: Number
        // required: true
      },
      baths: {
        type: Number
        // required: true
      },
      sqft: {
        type: Number
      },
      city: {
        type: String
        // required: true
      },
      imgs: {
        type: String
      },
      link: {
        type: String
      }
    }
  ]
});

module.exports = AdminUser = mongoose.model("adminUser", UserSchema);
