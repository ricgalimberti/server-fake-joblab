var path                        = require('path');
var jsonServer                  = require('json-server');
var path                        = require('path');
var hotels                      = require(path.join(__dirname, 'hotels'));
var restaurants                 = require(path.join(__dirname, 'restaurants'));
var flights                     = require(path.join(__dirname, 'flights'));
var places                      = require(path.join(__dirname, 'places'));


var server = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, 'db.json'));
var middlewares = jsonServer.defaults();


server.use(middlewares);

server.get('/hotels', function(req, res) {
    res.json(hotels);
});

server.get('/restaurants', function(req, res) {
    res.json(restaurants);
});

server.get('/flights', function(req, res) {
    res.json(flights);
});

server.get('/places', function(req, res) {
    res.json(places);
});

server.use(router);

server.listen('3004', function() {
    console.log('Server is running on Port 3004');
});