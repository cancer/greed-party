'use strict';
const app = require('../../index').app;
const Price = require('../../model/db/price');

app.get('/api/prices/', (req, res) => {
  Price.find().exec((err, docs) => {
    res.json(docs);
  });
});

app.get('/api/prices/:id', (req, res) => {
  Price.findByDuty(req.params.id).exec((err, docs) => {
    res.json(docs);
  });
});

