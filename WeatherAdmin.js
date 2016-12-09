var fs = require("fs");
var cli = require("./cli.js");

function printFile(){
	"use strict";
		fs.readFile("log.txt", "utf8", function(error, data){
			if (error){
				return console.log("I don't know how, but you broke something...");
			}	
			console.log(data);
		});
}

module.exports = printFile;