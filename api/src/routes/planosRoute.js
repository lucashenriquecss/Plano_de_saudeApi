import express, { Router } from 'express';
import PlanoController from '../controllers/planosControllers.js';


const router = express.Router();

router
    .get("/planos", PlanoController.listarPlanos)
    .get("/planos/:id", PlanoController.listarPlanoId)
    .post("/planos",PlanoController.cadastrarPlano)
    .put("/planos/:id",PlanoController.atualizarPlano)
    .delete("/planos/:id",PlanoController.deletePlano)


export default router;