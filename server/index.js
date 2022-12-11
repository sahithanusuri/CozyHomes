var express = require('express');
const cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Importing Routes
var AuthRoute = require('./app/routes/auth')
var PropRoute = require('./app/routes/prop')
var AuthHostRoute = require('./app/routes/authhost')


// Configure app for bodyParser()
// lets us grab data from the body of POST
// allows us to Cross Origin
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Set up port for server to listen on
var port = process.env.PORT || 4000;


// Connect to DB
mongoose.connect('mongodb://localhost:27017/hotels');


// API routes
app.use('/api',AuthRoute);
app.use('/api/property',PropRoute);
app.use('/api/host',AuthHostRoute);


// Fire up server
// friendly message to console
app.listen(port);
console.log('Server listening on port ' + port);
