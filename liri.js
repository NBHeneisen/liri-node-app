//Set dependencies to variables.
var inquirer = require("inquirer");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
var fs = require("fs");
var keys = require("./keys.js");

//variable for twitter keys
tKeys = keys.twitterKeys;

//add inquirer prompt
inquirer.prompt([
    //gives user choices between what they'd like liri to do
    {
        type: "list",
        message: "What would you like to do today?",
        choices: ["View my tweets", "Spotify a song", "Look up a movie", "Do what it says"],
        name:"choices"
    }
//after user makes choice...
]).then(function(userChoice) {
    
    //take the choice and run the associated function
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

//function for viewing the past 10 tweets on your twitter account
function myTweets() {
    console.log("tweet!")

};

//function for giving song information to the user
function spotifyThisSong() {
    console.log("Spotifying")

};

//function for giving movie information to the user
function movieThis() {
    console.log("Looking up movie info")

};

//function for grabbing the text from random and doing what it says
function doWhatItSays () {
    console.log("Checking what it says...")

};