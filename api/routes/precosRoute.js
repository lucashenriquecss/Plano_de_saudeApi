const { Router } = require('express')
const PrecosControllers = require('../controllers/PrecosControllers')

const router = Router();

router
    .get("/precos", PrecosControllers.listarTodosPrecos)
    .get("/precos/:id", PrecosControllers.listarPrecoId)
    .post("/precos", PrecosControllers.cadastrarPreco)
    .put("/precos/:id", PrecosControllers.atualizarPreco)
    .delete("/precos/:id", PrecosControllers.deletePreco)

module.exports = router;