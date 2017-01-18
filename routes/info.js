var express = require('express'),
    request = require('request'),
    api = require('../movieApi');


var router = express.Router();

router.get('/:id', function(req, res) {
     api.movie_details(req.params.id,'info');
     api.search_movie(req.params.id+'/recommendations');

    var interval = setInterval(function() {
        if (api.Info.length >= 1 && api.Related.length >= 3) {
            clearInterval(interval);
            res.render('info', { movie: api.Info, related: api.Related });
         } else {
            //console.log('___Loading ... ___');
        }
    }, 1);


});

module.exports = router;
