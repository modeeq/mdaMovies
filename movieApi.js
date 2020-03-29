var express = require('express'),
    request = require('request'),
    home    = require('./routes/home');

var router = express.Router();
var api_key = 

var Search = [],
    Related = [],
    AllMovies = [];


//search movies by type
function search_movie(type) {


    var movies_api = 'https://api.themoviedb.org/3/movie/' + type + '?api_key=' + api_key + '&language=en-US&page=1';
    request(movies_api, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var movies = JSON.parse(body);
             console.log(type + ' ------------> ' + movies.results.length);
            for (var i = 0; i < 8; i++) {
                if(movies.results[i] == null){

                 }
                else{
                     movie_details(movies.results[i].id, type);
                }
 
            }


        } else {
            console.log(err);
            console.log('search movie faild');
        }
    });


}


//get movie details
function movie_details(id, type) {
   clear();
 
    var movie_api = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + api_key + '&language=en-US';
    request(movie_api, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var movie = JSON.parse(body);
            home.addMovie(type,movie);

            switch (type) {
                 
                case "search":
                    Search.push(movie);
                    AllMovies.push(movie);

                    break;
                
                default:
                    Related.push(movie);
                    AllMovies.push(movie);

                    break;

            }

        } else {

            console.log(err);
            console.log('movie details search faild');

        }

    });

}

function clear(){
    if (Search.length != 0) {
        Search.length = 0;
    }
   
    if (Related.length != 0) {
        Related.length = 0;
    }
    
}  

module.exports = {
    search_movie: search_movie,
    movie_details: movie_details,
    Search: Search,
    Related: Related,
    AllMovies:AllMovies
}
