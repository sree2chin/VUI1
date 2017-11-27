var express = require("express");
var router = express.Router();
var Command = require("../models/command");
var middleware = require("../middleware");

// ====================
// COMMANDS ROUTES
// ====================

// only these are valid command words.
var commandWords = ["create", "div", "add", "change"];

router.get("/getCommand", function(req, res){
  console.log('===============in GET COMMAND=====');
  console.log(req.query.commandText);
  var commandText = req.query.commandText;
  var resultText = "";
  if(commandText && commandText.length) {
  	commandText.toLowerCase().trim();
  	for(var i = 0; i < commandText.split(" ").length; i++) {
  		if(commandWords.indexOf(commandText.split(" ")[i]) != -1) {
  			resultText += commandText.split(" ")[i];
  		}
  	}
  	console.log("===========resultText");
  	console.log(resultText);
  	if(resultText.length) {
  		Command.find({command: resultText}, function(err, command){
  			if(err) {
  				console.log(err);
  				res.setHeader('Content-Type', 'application/json');
      			res.send(JSON.stringify({statusCode: 500}));
  			} else {
  				console.log("successful result");
  				console.log(command[0].script);
  				res.setHeader('Content-Type', 'application/json');
      			res.send(JSON.stringify(command[0].script));
  			}
  		})
  	}
  }
})

module.exports = router;

