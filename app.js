const express = require('express')
const app = express()
const port = 3000

//index
app.get('/posts', (req,res) => {
    res.send('Lista dei posts')
})

//show
app.get('/posts/:id', (req,res) => {
    res.send('Viasualizzazione del post ' + req.params.id)
})

//store
app.post('/posts', (req,res) => {
    res.send('Creazione nuovo post')
})

//update
app.put('/posts/:id', (req,res) => {
    res.send('Modifica del post ' + req.params.id)
})

//destroy
app.delete('/posts/:id', (req,res) => {
    res.send('Eliminazione del post ' + req.params.id)
})

app.listen(port, () => {
    console.log('Server in ascolto sulla porta ' + port)
})