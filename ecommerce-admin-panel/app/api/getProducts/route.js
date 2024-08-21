import connectDB from "@/lib/connectDB";
import Products from "@/models/products.model";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
  try {
    const session = await getServerSession(authOptions)
    await isAdmin(session);
    await connectDB();
    let products = await Products.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error adding product:", error); // Logging error
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
