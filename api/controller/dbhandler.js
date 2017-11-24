'use strict'
var mongoose = require('mongoose');
var task = require('../module/dbapimodel');
var viewData = require('../module/dbapiView');
var deleteData = require('../module/dbapiDelete');

exports.list = function(){
  console.log("goal");
}

exports.list_all_data = function(req,res){
    viewData.find({},function(err,task){
      if(err)
        res.send(err);
      else
        res.json(task);
    })
};

exports.insert_data = function(req,res){
    var new_task = new task(req.body);
    console.log(req.body);
    new_task.save(function(err,task){
      if(err)
        res.json(err);
      else
        var jsonObj = JSON.stringify('created":"true"');
        res.json(jsonObj);
    });
};

exports.find_data_by_name = function(req,res){
  console.log(req.params.name);
  var userName = req.params.name;
  viewData.find({"name":userName},function(err,data){
    if(err)
      res.send(err);
    else
      res.json(data);
  })
};

exports.deleteData = function(req,res){
  var email = req.params.email;
  console.log(email);
  deleteData.remove({"email":email},function(err,data){
    var jsonobj =JSON.parse(data);
    console.log(jsonobj.n);
    var removedElement = jsonobj.n;
    if(err){
      var jsonobj = JSON.stringify("Removed': 'false");
      res.json(jsonobj);
    }
    else{
      var jsonobj = JSON.stringify(`Removed': ${removedElement}`);
      res.json(jsonobj);
     }
  });
};
