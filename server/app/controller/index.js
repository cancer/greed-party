'use strict';
const app = require('../index').app;
const corser = require('corser');

module.exports = {
  run: () => {
    app.use(corser.create());
    require('./api/duties');
    require('./api/prices');
  }
};
