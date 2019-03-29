require("dotenv").config();
var command = process.argv[2];
var extra = process.argv.slice(3).join("+");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var time = require("moment")


if (command === "concert-this") {
  concertCommand();
}

if (command === "dspotify-this-song")
  concertCommand();
   
//   case "movie-this":
//     movieCommand();
//     break;

//   case "do-what-it-says":
//     sayCommand();
//     break;
// }

function concertCommand() {
  console.log("concert");
  axios.get("https://rest.bandsintown.com/artists/" + extra + "/events?app_id=codingbootcamp").then(function (response) {
    for (var i = 10; i < response.data.length; i++) {
      console.log(response.data[i].venue.name);
      console.log(response.data[i].venue.country);
      console.log(time(response.data[i].datetime).format("MM/DD/YYYY"));
    }
  })
}

function spotifyCommand() {
  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}


// function movieCommand() {
//   console.log("movie");
//   axios.get("https://rest.bandsintown.com/artists/" + Command + "/events?app_id=codingbootcamp").then(function(response){
//   console.log(response);
// }

// function sayCommand() {
//   console.log("say");
//   axios.get("https://rest.bandsintown.com/artists/" + Command + "/events?app_id=codingbootcamp").then(function(response){
//   console.log(response);
// }


// console.log("The name of venue: ")
// console.log("Venue Location: ")
// console.log("Dat of the Event: ")

// })