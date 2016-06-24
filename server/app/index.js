'use strict';
const express = require('express');
const path = require('path');

module.exports = {
  app: express(),
  config: {
    clientPath: path.resolve(__dirname, '../../client/'),
    staticPath: path.resolve(__dirname, '../../client/dist')
  }
};
