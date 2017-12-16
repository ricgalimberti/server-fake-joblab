var jsonServer                  = require('json-server');
var path                        = require('path');
var hotels                      = require('./hotels');
var restaurants                 = require('./restaurants');
var flights                     = require('./flights');
var places                      = require('./places');


var server = jsonServer.create();
var router = jsonServer.router('db.json');
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