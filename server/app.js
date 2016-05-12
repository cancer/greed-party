'use strict';

const express = require('express');

const app = express();
const NAME_SPACE = '/api';

app.get(`${NAME_SPACE}/duties/`, require('./modules/duties/index.js'));

app.get(`${NAME_SPACE}/prices/`, require('./modules/prices/index.js'));
app.get(`${NAME_SPACE}/prices/:id`, require('./modules/prices/index.js'));

app.get('/', (req, res) => {
  res.send('Hello Greed Party!');
});

app.listen(process.env.PORT || 3000);
