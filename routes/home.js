var   express          = require('express'),
	  request          = require('request'),
	  api  		 	   = require('../movieApi');
 
var router  = express.Router();
var api_key = '9c7820a5f33a4dff920ff9372328e8c5';
 
 function allMovies(){
 
 api.search_movie('popular');
 api.search_movie('now_playing');
 api.search_movie('top_rated');
 api.search_movie('upcoming');
 
 }
 
router.get('/',function(req, res){
   allMovies();
   res.render('home',{
   					  playing_movies:api.Playing,
   					  popular_movies:api.Popular,
   					  top_movies:api.Top,
   					  upcoming_movies:api.Upcoming
   					  
   					});

});

 
 
 
 
  
 

module.exports = router;