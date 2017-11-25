'use strict';

var mongoose = require('mongoose');
var mongoschema = mongoose.Schema;
// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');

logger.trace('view Schema Creation');
var dbViewSchema = new mongoschema({

    name:{
      type : String
    },
    email:{
      type : String
    },
    created_date:{
      type: Date
    },
    status:{
      type:[String]
    }
});

module.exports = mongoose.model('viewTask',dbViewSchema,'apidatacollection');
