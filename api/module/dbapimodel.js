'use strict';

var mongoose = require('mongoose');
var mongoschema = mongoose.Schema;

var dbSchema = new mongoschema({

    name:{
      type : String,
      required: 'Kindly Enter Your Name'
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
