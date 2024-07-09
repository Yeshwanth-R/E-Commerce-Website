import mongoose, { Schema, model } from "mongoose";

const ProductSchema = mongoose.Schema({
  ProductName: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
