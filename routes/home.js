var   express     = require('express'),
	  request     = require('request');

var router  = express.Router();
var api_key = '9c7820a5f33a4dff920ff9372328e8c5';
var Playing =[],
	Popular = [],
	Top =[],
	Upcoming=[];

 movie_api('popular');
 movie_api('now_playing');
 movie_api('top_rated');
 movie_api('upcoming');

 

router.get('/',function(req, res){
  res.render('home',{playing_movies:Playing,popular_movies:Popular,top_movies:Top,upcoming_movies:Upcoming});
});

//search movies by type
 function movie_api(type){
 	 var movies_api = 'https://api.themoviedb.org/3/movie/'+type+'?api_key='+api_key+'&language=en-US&page=1';
 	 request(movies_api,function(err,response,body){
    	if (!err && response.statusCode == 200) {
    	var movies = 	JSON.parse(body);
    		for(var i = 0; i < 8; i++){
    			movie_details(movies.results[i].id,type);
 
       		}
 	

    	}
    	else{
     		console.log(err);
    	}
     });


 }
 
 
 
//get movie details
 function movie_details(id,type){
	var movie_api ='https://api.themoviedb.org/3/movie/'+id+'?api_key='+api_key+'&language=en-US';
	request(movie_api,function(err,response,body){
		if (!err & response.statusCode == 200) {
			var movie = JSON.parse(body);
 
			switch(type){
				case "popular":
					  Popular.push(movie);

				break;
				case "now_playing":
					  Playing.push(movie);

				break;
				case "top_rated":
					  Top.push(movie);

				break;
				case "upcoming":
					 Upcoming.push(movie);

				break;


			}

 		}
		else{
 
			console.log(err);
		}

 	});
 
}
 
router.get('/trailer/:id',function(req, res){
   var trailer_api ='https://api.themoviedb.org/3/movie/'+req.params.id+'/videos?api_key='+api_key+'&language=en-US';
	request(trailer_api,function(err,response,body){
 	var trailer = JSON.parse(body);

	 if (!err && response.statusCode == 200) {
 			 
 			 trailer = trailer.results[0].key;
 	 		res.render('trailer',{url:trailer});
  		}
  	 else{
			 console.log('---' + err);

			 
		}
	 

 	});
 
  });

module.exports = router;