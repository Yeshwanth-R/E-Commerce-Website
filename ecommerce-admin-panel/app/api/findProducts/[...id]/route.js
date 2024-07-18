import connectDB from "@/lib/connectDB";
import Products from "@/models/products.model";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await connectDB();
        let url = req.url
        let arr = url.split('/')
        let index = arr.length - 1
        let id = arr[index]
        let products = await Products.findById(id);
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error adding product:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
