// Boilerplate
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// External Routing
var apiRoutes = require('./routing/apiRoutes')
var htmlRoutes = require('./routing/htmlRoutes')

app.use('/', htmlRoutes)
app.use('/api/friends', apiRoutes);
  
app.listen(PORT, function() {
    console.log('server listening on: http://localhost:' + PORT)
})