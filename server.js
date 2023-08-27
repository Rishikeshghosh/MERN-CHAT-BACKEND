const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const UserRoute = require("./Routes/userRoutes");
const ChatRoute = require("./Routes/chatRoutes");
const MessageRoute = require("./Routes/messageRoutes");
const connectDB = require("./config/mongoDb");
const color = require("colors");
const cors = require("cors");
const path = require("path");

/* const { notFound, errorHandler } = require("./Middleware/errorHandler"); */
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api", UserRoute);
app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`.yellow.bold);
});
