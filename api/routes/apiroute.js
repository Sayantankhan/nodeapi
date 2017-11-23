'use strict';

module.exports = function(app){
  var controller = require('../controller/dbhandler');

  app.route('/findData')
    .get(controller.list_all_data);

  app.route('/insertData')
    .post(controller.insert_data);
};
