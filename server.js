const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const UserRoute = require("./Routes/userRoutes");
const ChatRoute = require("./Routes/chatRoutes");
const MessageRoute = require("./Routes/messageRoutes");
/* const connectDB = require("./config/mongoDb"); */

const cors = require("cors");
const path = require("path");

/* const { notFound, errorHandler } = require("./Middleware/errorHandler"); */

app.use(cors());
app.use(express.json());
/* connectDB(); */
app.use("/", (req, res) => {
  res.send("hello");
});
app.use("/api", UserRoute);
app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
