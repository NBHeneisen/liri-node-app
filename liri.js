//Set dependencies to variables.
var inquirer = require("inquirer");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
var fs = require("fs");
var keys = require("./keys.js");



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
    //variable for twitter keys
    var client = new twitter(keys.twitterKeys);
    var params = {screen_name: 'nbh1387'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for(i=0; i<20; i++) {
                console.log(tweets[i].created_at.split("+")[0]);
                console.log(tweets[i].text);
            }
        }
    });
};

//function for giving song information to the user
function spotifyThisSong() {
    console.log("Spotifying")
    inquirer.prompt([
        {
        type: "input",
        message: "Enter a song name...",
        name: "spotify_search"
        },
    ]).then(function(spotifying) {
        spotify.search({ type: 'track', query: spotifying.spotify_search }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
        console.log(data);
        });
    })

};

//function for giving movie information to the user
function movieThis() {
    console.log("Looking up movie info")

};

//function for grabbing the text from random and doing what it says
function doWhatItSays () {
    console.log("Checking what it says...")

};