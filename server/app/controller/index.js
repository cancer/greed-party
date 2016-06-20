'use strict';
const app = require('../index').app;
const fs  = require('fs');
const path = require('path');
const corser = require('corser');

module.exports = {
  run: () => {
    app.use(corser.create());
    require('./api/duties');
    require('./api/prices');

    app.use('/index.html', (req, res) => {
      let _path = path.resolve(__dirname, '../../../client/dist/index.html');
      fs.exists(_path, exist => {
        if(exist) {
          fs.readFile(_path, 'utf-8', (err, data) => {
            res.send(data)
          });
        }
        else {
          res.sendStatus(404);
        }
      });
    });
  }
};
