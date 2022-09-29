import express, { Router } from 'express';
import BeneficiariosController from '../controllers/BeneficiariosControllers.js';


const router = express.Router();

router
    .get("/beneficiarios", BeneficiariosController.listarBeneficiarios)
    .get("/beneficiarios/:id/valor", BeneficiariosController.listarValorBeneficiarioId)
    .get("/beneficiarios/:id", BeneficiariosController.listarBeneficiarioId)
    .post("/beneficiarios",BeneficiariosController.cadastrarBeneficiario)
    .put("/beneficiarios/:id",BeneficiariosController.atualizarBeneficiario)
    .delete("/beneficiarios/:id",BeneficiariosController.deleteBeneficiario)


export default router;