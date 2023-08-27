const { cyan } = require("colors");
const color = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    console.log(`DATABASE CONNECTED`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
