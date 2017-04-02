//Set dependencies to variables.
var inquirer = require("inquirer");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");


//add inquirer prompt

inquirer.prompt([

    {
        type: "list",
        message: "What would you like to do today?",
        choices: ["View my tweets", "Spotify a song", "Look up a movie", "Do what it says"],
        name:"choices"
    }

]).then(function(UserChoice))