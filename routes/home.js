var express = require('express'),
    request = require('request'),
    api = require('../movieApi');

var router = express.Router();

var     Playing   = [],
        Popular   = [],
        Top       = [],
        Upcoming  = [],
        AllMovies = [];
  


function allMovies() {
   // clear();
    api.search_movie('popular');
    api.search_movie('now_playing');
    api.search_movie('top_rated');
    api.search_movie('upcoming');
}

var addMovie = function(type,movie){
    switch (type) {
                case "popular":
                    Popular.push(movie);
                    AllMovies.push(movie);
 
                    break;
                case "now_playing":
                    Playing.push(movie);
                    AllMovies.push(movie);

                    break;
                case "top_rated":
                    Top.push(movie);
                    AllMovies.push(movie);

                    break;
                case "upcoming":
                    Upcoming.push(movie);
                    AllMovies.push(movie);

                    break;
           }
 }

router.get('/', function(req, res) {
      allMovies();
 
    var interval = setInterval(function() {
        if (Playing.length >= 8 && Popular.length >= 8 && Top.length >= 8 && Upcoming.length >= 8) {
            clearInterval(interval);

            console.log("| all movies are ready");
            res.render('home', {
                playing_movies: Playing,
                popular_movies: Popular,
                top_movies: Top,
                upcoming_movies: Upcoming,
                AllMovies:AllMovies

            });


        } else {
           // console.log('___Loading ... ___');
        }
    }, 1);

});

function clear(){
    
   if (Popular.length != 0) {
        Popular.length = 0;
    }
     if (Playing.length != 0) {
        Playing.length = 0;
    }
     if (Upcoming.length != 0) {
        Upcoming.length = 0;
    }
     if (Top.length != 0) {
        Top.length = 0;
    }

} 






exports.router = router;
exports.addMovie = addMovie;


