const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: string,
    require: true,
  },
  password: {
    type: string,
    require: true,
  },
  phome: {
    type: string,
    require: true,
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
