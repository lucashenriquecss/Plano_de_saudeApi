import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";



db.on("error", console.log.bind(console, "error de conexão do banco")); //para mostrar erro na conexao com o banco
db.once("open", ()=>{
  console.log("open conexão do banco");
}); // mostrar se o banco conectou


const app = express();

app.use(express.json())


routes(app);





export default app; 