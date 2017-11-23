'use strict'
var mongoose = require('mongoose');
var task = require('../module/dbapimodel');
var viewData = require('../module/dbapiView');

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
        res.json("inserted successfully");
    });
};
