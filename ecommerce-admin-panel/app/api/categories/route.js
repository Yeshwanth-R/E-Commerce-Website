import connectDB from "@/lib/connectDB";
import Category from "@/models/categories";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const data = await req.json();
        console.log("Received data:", data.name); // Logging received data

        const category = await Category.create(data);
        console.log("Category created:", category); // Logging created product

        return NextResponse.json({ message: "Category Created successfully" });
    } catch (error) {
        console.error("Error creating category:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


export async function GET(req, res) {
    try {
        await connectDB();
        let categories = await Category.find();
        return NextResponse.json(categories);
    } catch (error) {
        console.error("Error:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

