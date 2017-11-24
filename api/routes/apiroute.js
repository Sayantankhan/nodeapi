'use strict';

module.exports = function(app){
  var controller = require('../controller/dbhandler');

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
