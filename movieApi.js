var   express     = require('express'),
	  request     = require('request');
var router  = express.Router();
var api_key = '9c7820a5f33a4dff920ff9372328e8c5';

 var Playing  =[],
	 Popular  =[],
	 Top      =[],
	 Upcoming =[],
	 Search   =[];
 

 //search movies by type
 function search_movie(type){
  
 	 var movies_api = 'https://api.themoviedb.org/3/movie/'+type+'?api_key='+api_key+'&language=en-US&page=1';
 	 request(movies_api,function(err,response,body){
    	if (!err && response.statusCode == 200) {
    	var movies = 	JSON.parse(body);
    	console.log('------------> '+movies.results.length);
    		for(var i = 0; i < 8; i++){
    			movie_details(movies.results[i].id,type);
  
       		}
 	

    	}
    	else{
     		console.log(err);
     		console.log('search movie faild');
    	}
     });


 }


//get movie details
 function movie_details(id,type){
     Search.length 	 = 	0;
	 Playing.length  = 	0;
	 Popular.length  =  0;
	 Top.length 	 =	0;
	 Upcoming.length = 	0;
	 Search.length	 = 	0;

  	var movie_api ='https://api.themoviedb.org/3/movie/'+id+'?api_key='+api_key+'&language=en-US';
	request(movie_api,function(err,response,body){
 		if (!err && response.statusCode == 200) {
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
				case "search":
  					  Search.push(movie);
					 
				break;


			}

 		}
		else{
 
			console.log(err);
			console.log('movie details search faild');

		}

 	});
 
}

module.exports = {
	search_movie:search_movie,
	movie_details:movie_details,
 	Popular:Popular,
	Playing:Playing,
	Top:Top,
	Upcoming:Upcoming,
	Search:Search
}
