const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (index.html e microservico.js)
app.use(express.static(__dirname));

// Endpoint para receber dados do formulário de usuário
app.post('/create-user', (req, res) => {
    const userData = req.body;
    console.log('Usuário criado:', userData);
    res.send('Usuário recebido no servidor');
});

// Endpoint para receber dados do formulário de produto
app.post('/create-product', (req, res) => {
    const productData = req.body;
    console.log('Produto criado:', productData);
    res.send('Produto recebido no servidor');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
