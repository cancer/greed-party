'use strict';

const express = require('express');
const app = require('./app/index').app;
const db = require('./app/model/db');
const controller = require('./app/controller');
const path = require('path');

db.connect((err) => {
  if(err) console.error(err);

  let _path = path.resolve(__dirname + '/dist')
  app.use(express.static(_path));
  console.log(_path)

  controller.run();
});

app.listen(process.env.PORT || 3000);
