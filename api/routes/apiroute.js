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
	
	app.use((err, req, res, next) => {
		if (err.name === 'UnauthorizedError') {
			return res.status(403).send({
				success: false,
				message: 'No token provided.'
			});
		}
	});

	// catch 404 and forward to error handler
	app.use((req, res, next) => {
		const err = new Error('Not Found');
		err.status = 404;

		next(err);
	});

	// error handler
	app.use((err, req, res, next) => {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		res.status(err.status || 500);
		res.send({ 'error': 'Not Found' });
	});

};
