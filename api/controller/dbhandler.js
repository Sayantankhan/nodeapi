'use strict'
var mongoose = require('mongoose');
var task = require('../module/dbapimodel');
var viewData = require('../module/dbapiView');
var deleteData = require('../module/dbapiDelete');

// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');

exports.list = function(){
  console.log("goal");
}

exports.list_all_data = function(req,res){
    logger.trace("/findData -- finding all data");
    viewData.find({},function(err,task){
      if(err){
        logger.error("error in /findData : "+err);
        res.send(err);
      }
      else{
        logger.debug("listing all data");
        res.json(task);
      }
    })
};

exports.insert_data = function(req,res){
    logger.trace("/insertData -- insert data");
    var new_task = new task(req.body);
    console.log(req.body);
    new_task.save(function(err,task){
      if(err){
        logger.error("error in /insertData : "+err);
        res.json(err);
      }
      else{
        logger.debug("inserting Data -- "+req.body );
        var jsonObj = JSON.stringify('created":"true"');
        res.json(jsonObj);
      }
    });
};

exports.find_data_by_name = function(req,res){
  logger.trace(`/findUser/${req.params.name} -- finding by username`);
  console.log(req.params.name);
  var userName = req.params.name;
  viewData.find({"name":userName},function(err,data){
    if(err){
      logger.error(`error in /findUser/${req.params.name} : `+err);
      res.send(err);
    }
    else{
      logger.debug(`find data by name -- ${req.params.name}`);
      res.json(data);
    }
  })
};

exports.deleteData = function(req,res){
  logger.debug(`/deleteUser/${req.params.email} -- delete data by email`);
  var email = req.params.email;
  console.log(email);
  deleteData.remove({"email":email},function(err,data){
    var jsonobj =JSON.parse(data);
    console.log(jsonobj.n);
    var removedElement = jsonobj.n;
    if(err){
      var jsonobj = JSON.stringify("Removed': 'false");
      logger.error(`error in /deleteUser/${req.params.email} : `+jsonobj);
      res.json(jsonobj);
    }
    else{
      logger.debug(`removing Element ${removedElement}`);
      var jsonobj = JSON.stringify(`Removed': ${removedElement}`);
      res.json(jsonobj);
     }
  });
};
