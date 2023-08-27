const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
/* const UserRoute = require("./Routes/userRoutes");
const ChatRoute = require("./Routes/chatRoutes");
const MessageRoute = require("./Routes/messageRoutes"); */
/* const connectDB = require("./config/mongoDb"); */
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("hello");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
