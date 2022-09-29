const { Router } = require('express')
const BeneficiarioControllers = require('../controllers/BeneficiarioControllers')

const router = Router();

router
    .get("/beneficiarios", BeneficiarioControllers.listarTodosBeneficiarios)
    .get("/beneficiarios/:id", BeneficiarioControllers.listarBeneficiarioId)
    .post("/beneficiarios", BeneficiarioControllers.cadastrarBeneficiario)
    .put("/beneficiarios/:id", BeneficiarioControllers.atualizarBeneficiario)
    .delete("/beneficiarios/:id", BeneficiarioControllers.deleteBeneficiario)

module.exports = router;