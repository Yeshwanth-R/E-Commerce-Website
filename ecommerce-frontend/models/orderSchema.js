const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    lineItems: Object,
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    paid: Boolean
})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order;