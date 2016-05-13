'use strict';
const app = require('express')();

module.exports = {
  run: () => {
    require('./api/duties');
    require('./api/prices');
  }
};
