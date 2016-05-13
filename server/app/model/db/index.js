'use strict';
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/greedParty';
const db = module.exports;

db.connect = (callback) => {
  if(mongoose.connection.readyState !== 0) {
    process.nextTick(callback);
    return;
  }

  mongoose.connect(MONGO_URI, callback);
};

db.destroy = (callback) => {
  mongoose.disconnect(callback);
};

