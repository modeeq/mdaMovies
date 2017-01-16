var express = require('express'),
    request = require('request'),
    api = require('../movieApi');


var router = express.Router();
var api_key = 'c92efbcc7ed48b9abaeac2519652aee6';

router.get('/', function(req, res) {
    res.render('search', { movies: api.Search });
    //res.send(api.Search)
});


router.post('/', function(req, res) {



    search_movie = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US&query=' + req.body.term + '&page=1&include_adult=false';
    request(search_movie, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            movies = JSON.parse(body);

            for (var i = 0; i < movies.results.length; i++) {
                api.movie_details(movies.results[i].id, 'search');

            }
        } else {
            console.log(err);
        }
        var interval = setInterval(function() {
            if (api.Search.length >= 3) {
                clearInterval(interval);
                res.redirect('/search');


            } else {
                console.log('_no_');
            }
        }, 100);

    });

});

module.exports = router;
