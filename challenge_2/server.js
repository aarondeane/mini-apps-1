const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const salesData = [];

const jsonConverter = (object) => {
    object = JSON.parse(object);
    const fields = Object.keys(object);
    const csvStr = fields.join(',');
    return csvStr;
}

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sales', (req, res, next) => {
    res.send(JSON.stringify(req.body));
});

app.post('/sales', (req, res, next) => {
    res.send(jsonConverter(req.body.jsoninput));
});

app.listen(PORT, ()=>
    console.log(`Express server listening on port ${PORT}`)
)