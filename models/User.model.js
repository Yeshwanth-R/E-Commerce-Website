import mongoose, { Schema, model } from "mongoose";

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  ConfirmPassword: {
    type: String,
    require: true,
  },
  Cart: {
    type: Array,
    default: [],
  },
  Admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
