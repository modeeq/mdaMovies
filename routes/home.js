var   express          = require('express'),
	  request          = require('request'),
	  api  		 	   = require('../movieApi');
 
var router  = express.Router();
  
 function allMovies(){
 
 api.search_movie('popular');
 api.search_movie('now_playing');
 api.search_movie('top_rated');
 api.search_movie('upcoming');
 
 }
	allMovies();

router.get('/',function(req, res){
    

     var interval = setInterval(function(){
     	if (api.Playing.length >= 7) {
     		 clearInterval(interval);

     		console.log("| yes");
			res.render('home',{
   					  playing_movies:api.Playing,
   					  popular_movies:api.Popular,
   					  top_movies:api.Top,
   					  upcoming_movies:api.Upcoming

   					});

 
     	}
     	else{
     		console.log('_no_');
     	}
     },500);
    
});

 
 
 
 
  
 

module.exports = router;