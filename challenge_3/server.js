// Install express and configure
const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Order = require('./controllers.js');

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('tiny'))

// Serve up static files
app.use(express.static('public'));

//Handle the client order post
app.post('/', Order.addOrder);

//Set listener
app.listen(PORT, () => console.log(`Express is now listening on port:${PORT}`));