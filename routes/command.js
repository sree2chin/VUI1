var express = require("express");
var router = express.Router();
var Command = require("../models/command");
var middleware = require("../middleware");

// ====================
// COMMANDS ROUTES
// ====================

// only these are valid command words.
var commandWords = ["create", "add", "make", "build", "div", "change", "modify", "restyle", "color"];

// to handle duplicate keywords.
var commandWordsMapper = {
  add: "create",
  make: "create",
  build: "create",
  modify: "change",
  restyle: "change"
}

router.get("/getCommand", function(req, res){
  console.log('===============in GET COMMAND=====');
  console.log(req.query);
  var commandText = req.query.commandText;
  var counter = null;
  if(req.query.counter) {
    counter = req.query.counter;
  }
  var resultText = "";
  if(commandText && commandText.length) {
  	commandText.toLowerCase().trim();
  	for(var i = 0; i < commandText.split(" ").length; i++) {
  		if(commandWords.indexOf(commandText.split(" ")[i]) != -1) {
        if(commandWordsMapper[commandText.split(" ")[i]]) {
          resultText += commandWordsMapper[commandText.split(" ")[i]];
        } else {
          resultText += commandText.split(" ")[i];
        }
  		}
  	}
  	console.log("===========resultText");
  	console.log(resultText);
  	if(resultText.length) {
  		Command.find({command: resultText}, function(err, command){
  			if(err) {
  				console.log(err);
  				res.setHeader('Content-Type', 'application/json');
          res.status(400)
      		res.send({status: 400});
  			} else {
          if(resultText.indexOf('create') != -1) {
            command[0].script += 'sDiv.setAttribute("id", "s-id-'+counter+'");';
          }
          console.log("===========successful", resultText);
          console.log(command);
  				res.setHeader('Content-Type', 'application/json');
          res.status(200);
      		res.send({data: command[0].script});
  			}
  		})
  	}
  }
  // res.setHeader('Content-Type', 'application/json');
  // res.status(200);
  // res.send({data: "hello"});
})

module.exports = router;

