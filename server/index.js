import net from  "node:net"; 
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3500;

const serverTCP = net.createServer()

serverTCP.on("connection", (socket) => {

    socket.on("data", (bufferData) => {
        const data = JSON.parse(bufferData.toString());
        console.log(data)
    });

    socket.on("close", () => {
        console.log("Client disconnected");
    });

    socket.on("error", () => {
        console.log("Client error", new Date().toLocaleString())
    });

    console.log("Client connected", new Date().toLocaleString());
});


serverTCP.listen(port, () => {
    console.log(`Server is up on server port ${port} ${new Date().toLocaleString()} `)
});

