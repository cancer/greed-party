'use strict';
const app = require('../index.js').app;
const fs  = require('fs');
const path = require('path');

module.exports = {
  run: () => {
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
