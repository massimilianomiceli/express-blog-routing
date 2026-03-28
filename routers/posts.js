const express = require('express');
const postsRouter = express.Router();

postsRouter.use(express.static('public'));

// INDEX
postsRouter.get('/', (req, res) => {
  res.send('Lista dei posts');
});

// SHOW
postsRouter.get('/:id', (req, res) => {
  res.send(`Visualizzazione del post ${req.params.id}`);
});

// STORE
postsRouter.post('/', (req, res) => {
  res.send('Creazione nuovo post');
});

// UPDATE
postsRouter.put('/:id', (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

// DESTROY
postsRouter.delete('/:id', (req, res) => {
  res.send(`Eliminazione del post ${req.params.id}`);
});

module.exports = postsRouter;
