const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');

var jsonConverter = (jsonObj) => {
    object = JSON.parse(jsonObj);
    console.log('This is the input object', object);
    const keys = Object.keys(object);
    const fields = keys.slice(0, keys.length - 1).join(',');
    console.log('These are the fields', fields);
    let csvStr = fields;
    let results = [];
    
    var populateEntries = (input) => {
        let values = [];
        for(var key in input) {
            if(key !== 'children') {
                values.push(input[key]);
            }
        }
        results.push(values.join(','));

        if (input.children.length > 0) { 
            for(var i = 0; i < input.children.length; i++) {
                populateEntries(input.children[i]);
            } 
        }   
    }
    populateEntries(object);
            
    results.forEach(entry => {
        csvStr += '\n' + entry;
    });
    
    return csvStr;
    
}


app.use(express.static('client'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sales', (req, res, next) => {
    res.send(JSON.stringify(req.body));
});

app.post('/sales', (req, res, next) => {
    let jsonObj = req.body.jsoninput;
    let csvObj = jsonConverter(jsonObj);
    res.send(csvObj);
});

app.listen(PORT, ()=>
    console.log(`Express server listening on port ${PORT}`)
)