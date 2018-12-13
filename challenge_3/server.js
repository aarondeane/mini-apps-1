// Install express and configure
const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
// Setup middlewar
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
// Serve up static files
app.use(express.static('public'))


app.post('/', (req, res, next) => {
    console.log('Yup that fetch worked!');
    res.sendStatus(201);
})


//Set listener
app.listen(PORT, () => console.log(`Express is now listening on port:${PORT}`));