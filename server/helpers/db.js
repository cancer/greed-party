'use strict';
const MongoClient = require('mongodb').MongoClient;

const DB_NAME = 'greedParty';
const DB_URL  = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

class DBHelper {
  constructor() {
    this.url = `${DB_URL}${DB_NAME}`;
    this.db  = null;
    this.collectionName = null;
  }

  connect() {
    return MongoClient.connect(this.url)
      .then(db => {
        this.db = db;
      });
  }

  find(docs) {
    let collection = this.db.collection(this.collectionName);
    return collection.find(docs);
  }

  close() {
    this.db.close();
    this.db = null;
  }

  _handleError(err) {}
}

module.exports = DBHelper;
