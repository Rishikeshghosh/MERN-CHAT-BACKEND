const { cyan } = require("colors");
const color = require("colors");
const mongoose = require("mongoose");
//CakZuDMR3xsdKuRH
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://riptu:CakZuDMR3xsdKuRH@cluster0.agsjgzb.mongodb.net/mern-chat-app?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`DATABASE CONNECTED ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
