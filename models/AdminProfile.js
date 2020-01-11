const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  adminUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminUser"
  },
  reviews: [
    {
      text: {
        type: String
      },
      name: {
        type: String
      }
    }
  ],
  leads: [
    {
      type: Schema.Types.ObjectId,
      ref: "leads"
    }
  ],

  listings: [
    {
      saleRent: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      beds: {
        type: Number,
        required: true
      },
      baths: {
        type: Number,
        required: true
      },
      sqft: {
        type: Number
      },
      city: {
        type: String,
        required: true
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
module.exports = AdminProfile = mongoose.model("adminProfile", ProfileSchema);
