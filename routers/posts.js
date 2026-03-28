const express = require('express');
const postsRouter = express.Router();
const elencoPost = require('../data/elenco');

postsRouter.use(express.static('public'));

// INDEX
postsRouter.get('/', (req, res) => {
  res.json(elencoPost);
});

// SHOW
postsRouter.get('/:id', (req, res) => {
  const singoloPost = elencoPost.find(
    (post) => post.id === Number(req.params.id),
  );

  res.json(singoloPost || { error: 'Post non trovato' });
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
