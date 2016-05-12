'use strict';
const DBHelper = require('./db.js');

const NAME_COLLECTION = 'prices';

class DBHelperPrices extends DBHelper {
  constructor() {
    super()
    this.collectionName = NAME_COLLECTION;
  }

  _handleError(err) {
    console.error(err);
  }
}

module.exports = DBHelperPrices;
