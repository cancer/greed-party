'use strict';
const DBHelper = require('../../helpers/db_duties.js');

module.exports = function(req, res) {
  let db = new DBHelper();
  db.connect().then(() => {
    db.find().toArray((err, result) => {
      db.close();
      res.send(result)
    });
  });
};
