const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//API para retornar todas as ONGS
routes.get('/ongs', OngController.index);

//API para a criação de uma ONG
routes.post('/ongs', OngController.create);

//API para retornar todos os iincidents
routes.get('/incidents', IncidentController.index);

//API para a criação de um incident
routes.post('/incidents', IncidentController.create);

//API para deletar um incident
routes.delete('/incidents/:id', IncidentController.delete);

//API para retornar incidents de uma ONG
routes.get('/profile', ProfileController.index);

//API para Criar Sessão (Login)
routes.post('/sessions', SessionController.create);


module.exports = routes