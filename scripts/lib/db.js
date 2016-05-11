'use strict';
const MongoClient = require('mongodb').MongoClient;
const Promise = require('bluebird');

const DB_NAME = 'greedParty';

class DB {
  constructor() {
    let url = `mongodb://localhost:27017/${DB_NAME}`;
    MongoClient.connect(url).then(db => {
      console.log(`Connected ${url} successfully`);
      db.dropDatabase();
      this.db = db;
    })
    .catch(err => console.log(err));
  }

  insert(target, docs, opts) {
    return this.db.collection(target)
      .insertMany(docs, opts)
      .catch(this._handleError);
  }

  close() {
    this.db.close();
  }

  _handleError(err) {
    console.error(err);
    this.close();
  }
}

module.exports = DB;
