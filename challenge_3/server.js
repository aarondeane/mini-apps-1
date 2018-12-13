// Install express and configure
const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve up static files
app.use(express.static('public'));

//Handle the client order post
app.post('/', (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
})

//Set listener
app.listen(PORT, () => console.log(`Express is now listening on port:${PORT}`));