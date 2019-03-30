require("dotenv").config();
var command = process.argv[2];
var extra = process.argv.slice(3).join("+");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var time = require("moment")
var fs = require("fs");

function randomBot() {
  if (command === "concert-this") {
    concertCommand();
  }
  if (command === "spotify-this-song") {
    spotifyCommand();
  }

  if (command === "movie-this") {
    movieCommand();
  }

  if (command === "do-what-it-says") {
    sayCommand();
  }
}

randomBot()

function concertCommand() {
  axios.get("https://rest.bandsintown.com/artists/" + extra + "/events?app_id=codingbootcamp").then(function (response) {
    for (var i = 10; i < response.data.length; i++) {
      console.log(response.data[i].venue.name);
      console.log(response.data[i].venue.country);
      console.log(time(response.data[i].datetime).format("MM/DD/YYYY"));
    }
  })
}

function spotifyCommand() {
  spotify.search({
    type: 'track',
    query: extra
  }, function (err, data) {
      for (var i = 0; i < data.tracks.items.length; i++) {
        console.log(data.tracks.items[i].artists[0].name);
        console.log(data.tracks.items[i].name);
        console.log(data.tracks.items[i].preview_url);
        console.log(data.tracks.items[i].album.name);
      }
    });
}

function movieCommand() {
  axios.get("https://www.omdbapi.com/?t=" + extra + "&y=&plot=short&apikey=8c938da9").then(function (response) {
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.Ratings[1].Source + " : " + response.data.Ratings[1].Value);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  });
}

function sayCommand() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);

    var dataArr = data.split(",");

    console.log(dataArr);

    command = dataArr[0]
    extra = dataArr[1]

    randomBot()

  })
}