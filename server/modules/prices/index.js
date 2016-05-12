'use strict';
const DBHelper = require('../../helpers/db_prices.js');

module.exports = function(req, res) {
  let db = new DBHelper();
  let docs = {};
  if(req.params && req.params.id) {
    docs.duty_id = req.params.id;
  }

  db.connect().then(() => {
    db.find(docs).toArray((err, result) => {
      db.close();
      res.json(result)
    });
  });
};

