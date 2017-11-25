'use strict';

// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');

module.exports = function(app){
  var controller = require('../controller/dbhandler');
  logger.trace("app in route Section");

  app.route('/findData')
    .get(controller.list_all_data);

  app.route('/insertData')
    .post(controller.insert_data);

  app.route('/findUser/:name')
    .get(controller.find_data_by_name);

  app.route('/deleteUser/:email')
    .get(controller.deleteData)
    .delete(controller.deleteData)
};
