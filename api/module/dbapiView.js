'use strict';

var mongoose = require('mongoose');
var mongoschema = mongoose.Schema;

var dbViewSchema = new mongoschema({

    name:{
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
