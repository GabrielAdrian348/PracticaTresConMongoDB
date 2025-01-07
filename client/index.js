import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT || 3500,
    host: process.env.HOST || "localhost"
};

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
    console.log("cliente conected");
    const args = process.argv.splice(2);

    clientTCP.write(JSON.stringify(args))

    clientTCP.end();
    
})