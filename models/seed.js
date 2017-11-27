var mongoose = require("mongoose");
var Campground = require("./campground");
var Comment = require("./comment");
var Command = require("./command");

function seedDB() {
	// Campground.remove({}, function(err){
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log("REMOVED campgrounds");
	// 	}
	// })
	// Comment.remove({}, function(err){
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log("REMOVED comments");
	// 	}
	// })
	Command.remove({}, function(err){
		if(err) {
			console.log(err);
		} else {
			console.log("REMOVED commands");
		}
	})

	Command.create({
		command: "creatediv", 
		script: 'var sDiv = document.createElement("div"); sDiv.setAttribute("style", "height: 200px; background-color: #eee; padding: 5px; margin: 5px;");document.querySelector("#s-main-inner-container").append(sDiv);'
	}, function(err, command){
		if(err) {
			console.log(err);
		} else {
			console.log("added a command");
		}
	})
	// //add new campgrounds
	// //custom variables
	// var data = [
	// 	{name: "tinky", image: "http://www.photosforclass.com/download/5946330957", description: "badsfafsdfas"},
	// 	{name: "chinky", image: "http://www.photosforclass.com/download/5946338165", description: "badsfafsdfas"},
	// 	{name: "rinky", image: "http://www.photosforclass.com/download/6215504769", description: "badsfafsdfas"},
	// 	{name: "dinky", image: "http://www.photosforclass.com/download/5946899750", description: "badsfafsdfas"}
	// ]; 

	// data.forEach(function(seed, i){
	// 	Campground.create(seed, function(err, campground){
	// 		if(err) {
	// 			console.log(err);
	// 		} else {
	// 			console.log("added a campground");
	// 			Comment.create(
 //                    {
 //                        text: "This place is great, but I wish there was internet",
 //                        author: "Homer"
 //                    }, 
 //                    function(err, comment){
 //                        if(err){
 //                            console.log(err);
 //                        } else {
 //                            campground.comments.push(comment);
 //                            campground.save();
 //                            console.log("Created new comment");
 //                        }
 //                    }
 //                );
	// 		}
	// 	})
	// })

	//add new comments
}

module.exports = seedDB;
