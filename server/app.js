'use strict';

const express = require('express');

const app = express();
const NAME_SPACE = '/api';

app.get(`${NAME_SPACE}/duties/`, (req, res) => {
  res.send('duties');
});

app.get(`${NAME_SPACE}/prices/`, (req, res) => {
  res.send('prices');
});

app.get('/', (req, res) => {
  res.send('Hello Greed Party');
});

app.listen(3000);
