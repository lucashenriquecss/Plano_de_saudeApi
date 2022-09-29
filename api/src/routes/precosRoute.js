import express, { Router } from 'express';
import PrecosController from '../controllers/precosControllers.js';


const router = express.Router();

router
    .get("/precos", PrecosController.listarPrecos)
    .get("/precos/:id", PrecosController.listarPrecoId)
    .post("/precos",PrecosController.cadastrarPreco)
    .put("/precos/:id",PrecosController.atualizarPreco)
    .delete("/precos/:id",PrecosController.deletePreco)


export default router;