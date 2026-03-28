const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts.js');

app.use('/posts/', postsRouter);

app.listen(port, () => {
  console.log('Server in ascolto sulla porta ' + port);
});
