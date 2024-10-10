const mongoose = require("mongoose");

const URI =
  "mongodb+srv://lohaniaakarsh:sagarmatha@cluster0.ke1r6ng.mongodb.net/Web_Dev?retryWrites=true&w=majority&appName=Cluster0";

const conectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(1);
  }
};
module.exports = conectDb;
