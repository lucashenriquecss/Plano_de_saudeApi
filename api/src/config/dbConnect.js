import mongoose from "mongoose";

/*Conexão com o banco MONGODB  de forma local*/

mongoose.connect("mongodb://localhost:27017/plano");

let db = mongoose.connection;


export default db;