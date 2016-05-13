'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DutySchema = new Schema({
  name: String,
  ldst_id: String,
  ldst_url: String,
  has_prices: Boolean
});

DutySchema.static('findHasPrices', function() {
  return this.find({has_prices: true});
});

module.exports = mongoose.model('Duty', DutySchema);

