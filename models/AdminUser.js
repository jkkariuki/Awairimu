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
      id: {
        type: Schema.Types.ObjectId,
        ref: "lead"
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      email: {
        type: String
      }
    }
  ],

  messages: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "lead"
      },
      name: {
        type: String
      },
      email: {
        type: String
      },
      msg: {
        type: String
      },
      listing: {
        type: Object
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = AdminUser = mongoose.model("adminUser", UserSchema);
