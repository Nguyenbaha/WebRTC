import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors"

const port = 8080;
const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods:["GET","POST"]
    }
});

app.use(cors)

io.on("connection", (socket) => {

    console.log("user is connected")

    socket.on("disconnect", () => {
        console.log("user is disconnect")
    })
})

server.listen(port, () => {
    console.log( `Listening to server on port ${port}`)
})