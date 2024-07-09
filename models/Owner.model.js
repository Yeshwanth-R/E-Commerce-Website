import mongoose, { Schema, model } from "mongoose";

const OwnerSchema = mongoose.Schema({
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
  Product: {
    type: Array,
    default: [],
  },
  Admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Owner", OwnerSchema);
