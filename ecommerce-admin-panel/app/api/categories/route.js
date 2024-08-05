import connectDB from "@/lib/connectDB";
import Category from "@/models/categories";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const data = await req.json();
        console.log("Received data:", data.name);
        const category = await Category.create(data);
        console.log("Category created:", category);

        return NextResponse.json({ message: "Category Created successfully" });
    } catch (error) {
        console.error("Error creating category:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
export async function PUT(req) {
    try {
        await connectDB();
        const data = await req.json();
        console.log("Received data:", data);
        const category = await Category.findByIdAndUpdate(data.id, data)
        console.log("Category Updated:", category);

        return NextResponse.json({ message: "Category Created successfully" });
    } catch (error) {
        console.error("Error creating category:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


export async function GET(req, res) {
    try {
        await connectDB();
        let categories = await Category.find().populate("parent");
        return NextResponse.json(categories);
    } catch (error) {
        console.error("Error:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}



export async function DELETE(req) {
    try {
        await connectDB();
        const { id } = await req.json();
        console.log("Received data:", id);
        const category = await Category.findByIdAndDelete(id)
        console.log("Category Deleted:", category);

        return NextResponse.json({ message: "Category Deleted successfully" });
    } catch (error) {
        console.error("Error Deleting category:", error); // Logging error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

