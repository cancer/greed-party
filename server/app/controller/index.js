'use strict';
const express = require('express');
const fs  = require('fs');
const path = require('path');
const corser = require('corser');

const gp = require('../index');
const app = gp.app;

module.exports = {
  run: () => {
    app.use(corser.create());
    app.use(express.static(gp.config.staticPath));

    require('./api/duties');
    require('./api/prices');
  }
};
