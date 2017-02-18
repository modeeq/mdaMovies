var express = require('express'),
    request = require('request'),
    api = require('../movieApi');

var selectedMovie = {};

var router = express.Router();
 router.get('/:id', function(req, res) {
   selectedMovie = {};

   api.search_movie(req.params.id +'/recommendations');
    for(var i = 0 ; i < api.AllMovies.length; i++){
        if(api.AllMovies[i].id == req.params.id){
            selectedMovie =  api.AllMovies[i] ;
        }


    }


    var interval = setInterval(function() {
        if (selectedMovie != '' && api.Related.length >= 3) {
            clearInterval(interval);
            res.render('info', { movie: selectedMovie, related: api.Related });
         // res.send(selectedMovie);

          } else {
         }
    }, 1);


});

module.exports = router;
