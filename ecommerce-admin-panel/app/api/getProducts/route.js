import connectDB from "@/lib/connectDB";
import Products from "@/models/products.model";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();
    let products = await Products.find();
    console.log(products);
    return NextResponse.json({ message: "Got the products Succefully" });
  } catch (error) {
    console.error("Error adding product:", error); // Logging error
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
