'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var deleteSchema = new schema({

  email:{
    type: String,
    required: 'Kindly enter email'
  }
});

module.exports = mongoose.model('deleteSchema',deleteSchema,'apidatacollection');
