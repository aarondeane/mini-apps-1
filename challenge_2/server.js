const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');

var csv = '';

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
 app.set('view engine', 'pug');

app.use(express.static('client'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sales', (req, res, next) => {
    res.send(JSON.stringify(req.body));
});

app.post('/sales', (req, res, next) => {
    let jsonObj = req.body.jsoninput;
    csv = jsonConverter(jsonObj);
    console.log(csv);
    res.send('<body><div class="header"> <h1>CSV Sales Report Generator</h1></div><form action="http://127.0.0.1:3000/sales" method="post" class="JSONinput"><div class="userinput"><label for="jsoninput">Paste your JSON data here</label><input type="text" name="jsoninput" required></div><div><button>Submit</button></div></form><div class="csvreport">csv</div><script src="app.js"></script></body>');

});

app.listen(PORT, ()=>
    console.log(`Express server listening on port ${PORT}`)
)