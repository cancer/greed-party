'use strict';

const app = require('./app/index').app;
const db = require('./app/model/db');
const controller = require('./app/controller');

db.connect((err) => {
  if(err) console.error(err);

  controller.run();
});

app.listen(process.env.PORT || 3000);
