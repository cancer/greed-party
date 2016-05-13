'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PriceSchema = new Schema({
  name: String,
  icon: String,
  ldst_id: String,
  ldst_url: String,
  duty_id: String
});

PriceSchema.static('findByDuty', function(dutyId) {
  return this.find({duty_id: dutyId});
});

module.exports = mongoose.model('Price', PriceSchema);
