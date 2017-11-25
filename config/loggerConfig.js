'use strict'
const logger = require('log4js');

logger.configure({
  appenders: { apiworking: { type: 'file', filename: 'logs/apiworking.log' } },
  categories: { default: { appenders: ['apiworking'], level: 'error' } }
});

module.exports = logger;
