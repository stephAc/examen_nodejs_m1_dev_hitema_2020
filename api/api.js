const express = require('express');
const HttpStatus = require('http-status-codes');
const bodyParser = require('body-parser');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.get('/people', (request, response) => {
  const result = peopleService.getPeople(request.query.gender);
  response.send(result);
});

v1.put('/people/:id', (request, response) => {
  const result = peopleService.updatePeople(request.params.id, request.body);
  if (!result.isFind) return response.sendStatus(HttpStatus.NOT_FOUND);
  result.people
    ? response.sendStatus(HttpStatus.OK)
    : response.sendStatus(HttpStatus.NOT_MODIFIED);
});

module.exports = app;
