var express = require('express'),
    request = require('request'),
    api = require('../movieApi');

var router = express.Router();

function allMovies() {

    api.search_movie('popular');
    api.search_movie('now_playing');
    api.search_movie('top_rated');
    api.search_movie('upcoming');

}
 
router.get('/', function(req, res) {
      allMovies();


    var interval = setInterval(function() {
        if (api.Playing.length >= 8 && api.Popular.length >= 8 && api.Top.length >= 8 && api.Upcoming.length >= 8) {
            clearInterval(interval);

            console.log("| all movies are ready");
            res.render('home', {
                playing_movies: api.Playing,
                popular_movies: api.Popular,
                top_movies: api.Top,
                upcoming_movies: api.Upcoming,
                AllMovies:api.AllMovies

            });


        } else {
           // console.log('___Loading ... ___');
        }
    }, 1);

});








module.exports = router;
