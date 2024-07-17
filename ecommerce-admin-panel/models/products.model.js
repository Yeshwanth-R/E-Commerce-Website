import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  description: { type: String, require: true },
  Price: { type: Number, require: true },
});

const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default Products;
