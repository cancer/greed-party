'use strict';
const app = require('../../index').app;
const Duty = require('../../model/db/duty');

app.get('/api/duties/', (req, res) => {
  Duty.find().exec((err, docs) => {
    res.json(docs);
  });
});

