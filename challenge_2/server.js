const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// app.static(__dirname)
app.use(express.static('client'))

app.get('/sales', (req, res, next) => {
    res.send('Here is the sales report!');
});

app.post('/sales', (req, res, next) => {
    res.statusCode(201).send();
});

app.listen(PORT, ()=>
    console.log(`Express server listening on port ${PORT}`)
)