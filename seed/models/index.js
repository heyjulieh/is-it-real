
var mongoose = require("mongoose");
 mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/animals" );

// Use native JavaScript promises to avoid warning
mongoose.Promise = global.Promise;

module.exports.Animal = require("./animal.js");
