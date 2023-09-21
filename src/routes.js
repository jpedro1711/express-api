const express = require('express');
const routes = express.Router();

const PlanetController = require('../controllers/PlanetController');

routes.post('/planets', PlanetController.store);

routes.get('/planets', PlanetController.index);

routes.put('/planets/:id', PlanetController.put);

routes.get('/planets/:id', PlanetController.findOne);

routes.delete('/planets/:id', PlanetController.delete);

module.exports = routes;
