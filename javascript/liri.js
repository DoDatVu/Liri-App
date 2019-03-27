require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

switch (action) {
  case "concert-this":
    total();
    break;
  
  case "dspotify-this-song":
    deposit();
    break;
  
  case "movie-this":
    withdraw();
    break;
  
  case "do-what-it-says":
    lotto();
    break;
  }
  
  