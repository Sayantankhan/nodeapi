const express = require("express");
var app = express();
const port = process.env.PORT || 8082;
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var apiroute = require('./api/routes/apiroute');
var bodyParser = require('body-parser');


var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sayantan',options,function(error){
  console.error.bind(console, 'connection error:');
	console.log("error in connection: "+error);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiroute(app);

app.listen(port);

console.log(`starting a node api: ${port}`);
