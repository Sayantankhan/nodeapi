'use strict';

var mongoose = require('mongoose');
var mongoschema = mongoose.Schema;
// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');


logger.trace('insert Schema Creation');
var dbSchema = new mongoschema({

    name:{
      type : String,
      required: 'Kindly Enter Your Name'
    },
    email:{
      type: String,
      required: 'Kindly Enter Your Email'
    },
    created_date:{
      type: Date,
      default: Date.now
    },
    status:{
      type:[{
          type: String,
          enum:['pending','ongoing','completed']
      }],
      default:['pending']
    }
});

module.exports = mongoose.model('task',dbSchema,'apidatacollection');
