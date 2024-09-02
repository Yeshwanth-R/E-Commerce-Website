import connectDB from "@/lib/connectDB";
import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    console.log("POST request")
    let data = await req.formData()
    const name = data.get('name')
    const email = data.get('email')
    const address = data.get('address')
    const city = data.get('city')
    const state = data.get('state')
    const pincode = data.get('pincode')
    const products = data.get("products")

    const productID = products.split(",")
    const unquieID = [...new Set(productID)]

    await connectDB();

    const productInfo = await Products.find({ _id: { $in: unquieID } })

    let lineItem = []

    for (const productID of unquieID) {
        const indo = productInfo.find((product) => product._id == productID)
        const quantity = products.split(",").filter((item) => item == productID).length
        lineItem.push({
            quantity: quantity, priceData: {
                currency: "INR",
                productData: indo.Name,
                unitAmount: quantity * indo.Price
            }
        })
    }
    console.log(lineItem)




    return NextResponse.json({ message: lineItem });
}