
require("dotenv").config();
var command = process.argv[2];
var extra = process.argv.slice(3);
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);



// if (command === "concert-this"){
//   concertCommand();
// }

console.log(extra);
console.log(process.argv)


// switch (command) {
//   case "concert-this":
//     concertCommand();
//     break;

//   case "dspotify-this-song":
//     spotifyCommand();
//     break;

//   case "movie-this":
//     movieCommand();
//     break;

//   case "do-what-it-says":
//     sayCommand();
//     break;
// }

function concertCommand() {
  console.log("concert");
  axios.get("https://rest.bandsintown.com/artists/" + extra + "/events?app_id=codingbootcamp").then(function(response) {
  console.log(response);
  for(var i = 0; i < 10; i++){
    }
  })
}


// function spotifyCommand() {
//   console.log("spotify");
//   axios.get("https://rest.bandsintown.com/artists/" + Command + "/events?app_id=codingbootcamp").then(function(response){
//   console.log(response);
// }

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