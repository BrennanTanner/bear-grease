const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: { type: String },
  username: { type: String, required: true },
  avatar: { type: String },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
 