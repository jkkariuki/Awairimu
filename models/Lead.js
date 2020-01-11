const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  adminUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminUser"
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  favorites: [
    {
      mlsId: {
        type: Number,
        required: true
      },
      listingPrice: {
        type: Number,
        required: true
      },
      img: {
        type: String
      },
      address: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      bdrms: {
        type: Number,
        required: true
      },
      baths: {
        type: Number,
        required: true
      },
      privateRemarks: {
        type: String
      }
    }
  ]
});

module.exports = Lead = mongoose.model("lead", LeadSchema);
