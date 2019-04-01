# Liri-App

# LiriBot
A language Interpretation and Recognition Interface that uses command line in node to give you back data
 LIRI will search Spotify for songs, Bands in Town for concerts and OMDB for movies


## Before running LIRI

 Clone down the repository
 please use your own api keys and create your own .env file following the format in the env.example file
  API Keys Required:
       ombd API Key
        spotify id
        
## Installation
 Run your terminal/bash and go to the root of the liri folder
```npm install```

## How to use LIRI
 LIRI is able to take in 4 commands utilizing node.js
    concert-this
    spotify-this-song
    movie-this
    do-what-it-says
   
   1. 'node liri.js concert-this \<band or artist name\>'
    Displays a list of results of where the band or artist is performing
   (Gif insert)
   
   2. 'node liri.js spotify-this-song \<song name\>'
   Displays top songs
   (Gif insert)
   
   3. 'node liri.js movie-this \<movie title\>'
    Displays the following information
       Title of the movie
       Year of the movie
       IMDB Rating of the movie
       Rotten Tomatoes Rating
       Where was the movie produced
       Plot of the movie
       Actors
    If there is no movie title inserted, the search will default to Mr. Nobody
   (Gif Insert)
   
   4. 'node liri.js do-what-it-says'
    Takes the text from random.txt and runs the song through the spotify-this-song command
   (Gif Insert)
   
   ## Built With
[Node.js](https://nodejs.org/en/)
[Spotify NPM Package](https://www.npmjs.com/package/node-spotify-api)
[moment NPM Package](https://www.npmjs.com/package/moment)
   
   Created by Dat Vu
   Github - https://github.com/DoDatVu
   
