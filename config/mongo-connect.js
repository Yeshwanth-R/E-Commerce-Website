const mongoose = require("mongoose");

try {
  let ConnectionDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/E-Commerce");
    console.log("Succes");
  };
} catch (error) {
  console.log(error);
}
