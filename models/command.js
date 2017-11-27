var mongoose = require("mongoose");

//schema start --------
var commandSchema = new mongoose.Schema({
	command: String,
	script: String
})

//compile the above into model.
module.exports = mongoose.model("Command", commandSchema);