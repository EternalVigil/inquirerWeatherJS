// Weather-JS: Command Line Interface
var inquirer = require ("inquirer");
var search = require("./UserSearch.js");
var admin = require("./WeatherAdmin.js");

inquirer.prompt([
	{
		name: "viewType",
		type: "list",
		message: "Select your view",
		choices:["User", "Admin", "Exit"]
	}
]).then(function(answers){
	"use strict";
	if (answers.viewType === "User"){
		search();
	}
	else if (answers.viewType === "Admin"){
		admin();
	}
	else if (answers.viewType === "Exit"){
		return console.log("GIVE YOU THE BOOT!");
	}
	else{
		return console.log("I don't know how, but you broke something...");
	}
	
});