const { cyan } = require("colors");
const color = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = mongoose.connect(
      "mongodb+srv://rishikeshghoshghosh:XsqDFY6y7irQbbfh@cluster0.kuz3zjp.mongodb.net/mern-chat-app?retryWrites=true&w=majority"
    );
    console.log(`DATABASE CONNECTED`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
