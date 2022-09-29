const { Router } = require('express')
const PlanosControllers = require('../controllers/PlanosControllers')

const router = Router();

router
    .get("/planos", PlanosControllers.listarTodosPlanos)
    .get("/planos/:planoId/precos/:codigoId", PlanosControllers.listarPlanoId)
    .post("/planos/:planoId/precos", PlanosControllers.cadastrarPlano)
    .put("/planos/:planoId/precos/:codigoId", PlanosControllers.atualizarPlano)
    .delete("/planos/:planoId/precos/:codigoId", PlanosControllers.deletePlano)

module.exports = router;