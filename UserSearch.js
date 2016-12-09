// JavaScript Document
var weather = require("weather-js");
var inquirer = require("inquirer");
var fs = require("fs");
var cli = require("./cli.js");

function UserSearch() {
	"use strict";

	inquirer.prompt([{
			name: "userName",
			type: "input",
			message: "Enter your username:"
		}, {
			name: "searchTerm",
			type: "input",
			message: "Enter Location (City, State)"
		}

	]).then(function (answers) {

		data.name = answers.userName;
		data.location = answers.searchTerm;
		data.timeStamp = Date.now();

		var userData = answers.userName + "/" + answers.searchTerm + "/" + Date.now() + "\n";
		appendFile(userData);
		getWeather(data.location);

	});


}
var data = {};
console.log("You got me.");
//UserSearch();
module.exports = UserSearch;

function appendFile(data) {
	"use strict";
	fs.appendFile("log.txt", data, "utf8", function (error) {
		if (error) {
			return console.log("Append File Failed!");
		} else {
			console.log("File was successfully updated.");
		}
	});
}

function getWeather(location) {
	"use strict";
	weather.find({
		search: location,
		degreeType: "F"
	}, function (error, result) {
		if (error) {
			return console.log("API Call to Weather-JS failed.");
		} else {
			console.log(result);
		}
	});
}
