var   express     = require('express'),
	  request     = require('request'),
	  api         = require('../movieApi');


var router  = express.Router();
var api_key = '9c7820a5f33a4dff920ff9372328e8c5';

router.get('/',function(req, res){
 	 res.render('search',{movies:api.Search});
});


router.post('/',function(req,res){
	
   	search_movie ='https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&language=en-US&query='+req.body.title+'&page=1&include_adult=false';
	request(search_movie,function(err,response,body){
			if (!err && response.statusCode == 200) {
				var movies = JSON.parse(body);
				for(var i = 0; i < 11 ; i++){
 				api.movie_details(movies.results[i].id,'search');
 			    res.render('search',{movies:api.Search});
 				}
 				 
 

			}
			else{
				console.log(err);
			}
	});
 
 });

module.exports = router;