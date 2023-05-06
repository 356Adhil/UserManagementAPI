const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userDisplayName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  authType: {
    type: String,
    required: true
  },
  authKey: {
    type: String,
    required: true
  },
  userType: {
    type: Number,
    required: true
  },
  userImage: {
    type: Buffer,
    required: true
  }
});

module.exports = mongoose.model('Users', userSchema);
