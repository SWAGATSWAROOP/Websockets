import dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
// Serve static files from the "public" directory
app.use(express.static(path.resolve("./src/public")));
const io = new Server(server);

// Socket IO
io.on("connection", (socket) => {
  console.log(`a new user connected ${socket.id}`);
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

// Route to serve the index.html file
app.get("/", (req, res) => {
  return res.sendFile("./src/public/index.html");
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Listening on port ${port}`));
