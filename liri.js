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
    inquirer.prompt([
        {
        type: "input",
        message: "Enter a song name...",
        name: "spotify_search"
        },
    ]).then(function(spotifying) {
        if (spotifying.spotify_search === "") {
            theSign()
        } else {
            spotify.search({ type: 'track', query: spotifying.spotify_search }, function(err, data) {
                if ( err ) {
                    console.log('Error occurred: ' + err);
                    return;
                };
                for (i=0; i < data.tracks.items.length; i++) {
                    console.log("Artist: " + data.tracks.items[i].artists[0].name);
                    console.log("Song: " + data.tracks.items[i].name);
                    console.log("Preview: " + data.tracks.items[i].preview_url);
                    console.log("Album: " + data.tracks.items[i].album.name);
                    console.log("-------------------------------")
                }
            });
        }
    })
};
//Function that uses the spotify API and returns info on the song "The Sign" by Ace of Base
//Used if the user doesn't choose a song for the spotify function
function theSign () {
    spotify.search({ type: 'track', query: "The Sign, Ace of Base" }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        };
            console.log("You didn't provide me with a song name, so in return you receive...")
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
    });
};


//function for giving movie information to the user
function movieThis() {
    console.log("Looking up movie info")

};

//function for grabbing the text from random and doing what it says
function doWhatItSays () {
    console.log("Checking what it says...")

};