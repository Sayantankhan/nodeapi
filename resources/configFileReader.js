'use strict';

var yaml = require('node-yaml');
var Promise = require('promise');

// var promise = new Promise(function(resolve,request){
//   yaml.read("./config/config.yml",function(err,data){
//     if(err){
//       console.log(err)
//     }
//     else{
//     //   console.log(data);
//       httpPort = data.http_port;
//       mongoUrl = data.mongodb_url;
//       mongoDb = data.mongodb_database;
//     }
//
//   });
// }).then(function (res) {
//       var mongoURLDB = mongoUrl + "/" + mongoDb;
//       console.log(res);
//   });
// console.log(promise);
// console.log(mongoUrl + "/" + mongoDb);

var data = yaml.readSync('../config/config');

exports.http_port = data.http_port;
exports.mongoUrl = data.mongodb_url;
exports.mongoDb = data.mongodb_database;
