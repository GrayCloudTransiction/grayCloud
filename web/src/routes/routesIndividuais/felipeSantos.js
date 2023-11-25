var express = require("express");
var router = express.Router();
var felipeSantosController = require("../../controllers/controllersIndividuais/felipeSantosController");

// Funções locais;
function info(rota){
    console.log(`[Felipe Santos Router] Rota: ${rota};`)
}

// Rotas
router.post("/listar/extrato", function (req, res) {
    info("/listaExtrato")
    felipeSantosController.listar_extrato(req, res);
})

router.post("/listar/extrato/atual", function(req, res){
    info("/listarExtratoAtual");
    felipeSantosController.listar_extrato_atual(req, res);
})

router.post("/listar/extrato/acumulado", function(req, res){
    info("/listarExtratoAtual");
    felipeSantosController.listar_extrato_acumulado(req, res);
})


module.exports = router;