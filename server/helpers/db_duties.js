'use strict';
const DBHelper = require('./db.js');

const NAME_COLLECTION = 'duties';

class DBHelperDuties extends DBHelper {
  constructor() {
    super()
    this.collectionName = NAME_COLLECTION;
  }

  _handleError(err) {
    console.error(err);
  }
}

module.exports = DBHelperDuties;
