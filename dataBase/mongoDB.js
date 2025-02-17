// Aca se coloca toda la logica para conectar la base de datos 
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uriDb = process.env.URI_DB;

const clientMongo = new MongoClient(uriDb);

const createConnectionMongo = async () => {
    await clientMongo.connect();
    console.log("Conexion a la base de datos establecida.")
}

createConnectionMongo();