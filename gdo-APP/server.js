"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rotas de exemplo
app.get('/api/project', function (req, res) {
    res.json([{ id: 1, nome: 'Projeto Construção 1' }, { id: 2, nome: 'Projeto Construção 2' }]);
});
app.post('/api/project', function (req, res) {
    var novoProjeto = req.body;
    res.status(201).json(novoProjeto);
});
// Iniciar o servidor
app.listen(port, function () {
    console.log("Servidor rodando em http://localhost:".concat(port));
});
