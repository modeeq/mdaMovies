var   express     = require('express'),
	  request     = require('request');

var router  = express.Router();
var api_key = '9c7820a5f33a4dff920ff9372328e8c5';


router.get('/:id',function(req, res){

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