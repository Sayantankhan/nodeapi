const express = require("express");
var app = express();
const port = process.env.PORT || 8082;
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var apiroute = require('./api/routes/apiroute');
var bodyParser = require('body-parser');
var configReader = require('./resources/configFileReader');
// logger added
var logobj = require('./config/loggerConfig');
const logger = logobj.getLogger('apiworking');
// helmet added
var helmet = require('helmet');
//config and testing
//const morgan = require('morgan');
const expressValidator = require('express-validator');
const config = require('config');

//========================================================================================

// helmet config
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet({
  frameguard: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//====================================== Binding mongoDb ==================================
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
console.log(config.DBHost);
mongoose.connect(config.DBHost,options,function(data){})
  .catch(function(err){
    console.error.bind(console, 'connection error:');
  	console.log("error in connection: "+err);
    logger.error("error in connection: "+err);
  })
//================================================================================================
if(config.util.getEnv('NODE_ENV') !== 'prod' ){
    logger.trace("in development/testing mode")
    require('dotenv').load();
}
else{
  logger.trace("in PRODUCTION...");
}

console.log(process.env.animal);

app.use(expressValidator());
apiroute(app);

//========================================== Run the Server ===============================
app.listen(configReader.http_port);

console.log(`starting a node api: ${configReader.http_port}`);
