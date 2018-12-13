// Require Express and create server
const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Serve up dist files
app.use(express.static('./client/dist'));

// Define and use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Server routing
app.get('/', (req, res, send) => {

});

app.post('/', (req, res, send) => {

});


app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

