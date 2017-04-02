//Set dependencies to variables.
var inquirer = require("inquirer");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
var fs = require("fs");
//var keys = require("./keys.js");

//add inquirer prompt

inquirer.prompt([

    {
        type: "list",
        message: "What would you like to do today?",
        choices: ["View my tweets", "Spotify a song", "Look up a movie", "Do what it says"],
        name:"choices"
    }

]).then(function(userChoice) {

    currentChoice = userChoice.choices;
    console.log(currentChoice);
    switch (currentChoice) {
        case "View my tweets":
            myTweets();
            break;

        case "Spotify a song":
            spotifyThisSong();
            break;

        case "Look up a movie":
            movieThis();
            break;

        case "Do what it says":
            doWhatItSays();
            break;
    }
});

function myTweets() {
    console.log("tweet!")
};

function spotifyThisSong() {
    console.log("Spotifying")

};

function movieThis() {
    console.log("Looking up movie info")

};

function doWhatItSays () {
    console.log("Checking what it says...")

};