'use strict';

// logger added
var logobj = require('../../config/loggerConfig');
const logger = logobj.getLogger('apiworking');

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


	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
    logger.error('404 error not found');
		next(err);
	});

};
