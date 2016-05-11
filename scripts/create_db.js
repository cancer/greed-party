'use strict'
const Promise   = require('bluebird');
const LdstAgent = require('./lib/ldst_agent.js');
const DB        = require('./lib/db.js');

const agent = new LdstAgent();
const db    = new DB();

agent.fetchDuties().then(duties => {
  Promise.all(duties.map((duty, idx) => {
    return agent.fetchPrices(duty.ldst_url).then(prices => {
      if(prices === null) return;

      // 報酬が取得できたらコンテンツの方にフラグを立てとく
      duty.has_prices = true;

      // 報酬にコンテンツIDを紐付ける
      prices.forEach(price => { price.duty_id = duty.ldst_id });

      db.insert('prices', prices)
        .then(() => console.log(`Inserted ${duty.name} successfully`));
      return prices;
    });
  }))
  .then(() => {
    return db.insert('duties', duties)
      .then(() => console.log('Inserted duties successfully'));
  })
  .finally(() => {
    db.close();
  });
});

