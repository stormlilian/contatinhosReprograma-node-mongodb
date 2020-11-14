const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.addContato)
router.get("/nome", controller.getContatoPorNome)
router.get("/id", controller.getContatoPorId)
router.delete("/deletar", controller.deleteContatoPorId)
router.put("/atualizar/:id", controller.atualizarContato)
router.patch("/atualizar/telefone/:id", controller.atualizaTelefoneContato)

module.exports = router