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
const http = require("http");
const { Server } = require("socket.io");
const { notFound, errorHandler } = require("./Middleware/errorHandler");
const PORT = process.env.PORT;
app.use(cors());
connectDB();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));
app.use("/api", UserRoute);
app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`.yellow.bold);
});
