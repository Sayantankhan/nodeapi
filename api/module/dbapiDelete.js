'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;
// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');

logger.trace('Delete Schema Creation');
var deleteSchema = new schema({
  email:{
    type: String,
    required: 'Kindly enter email'
  }
});

module.exports = mongoose.model('deleteSchema',deleteSchema,'apidatacollection');
