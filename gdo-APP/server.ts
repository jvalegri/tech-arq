const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas de exemplo
app.get('/api/project', (req: any, res: any) => {
  res.json([{ id: 1, nome: 'Projeto Construção 1' }, { id: 2, nome: 'Projeto Construção 2' }]);
});

app.post('/api/project', (req: any, res: any) => {
  const novoProjeto = req.body;
  res.status(201).json(novoProjeto);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
