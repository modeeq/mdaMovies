var   express     = require('express'),
	  request     = require('request');

var router  = express.Router();

router.get('/',function(req, res){
	var api_key = '9c7820a5f33a4dff920ff9372328e8c5';
    var api_Link = 'https://api.themoviedb.org/3/movie/upcoming?api_key='+api_key+'&language=en-US&page=1';
    request(api_Link,function(err,response,body){
    	if (!err && response.statusCode == 200) {
    	var movies = 	JSON.parse(body);
    		res.render('home',{movies:movies});


    	}
    	else{
    		console.log(err);
    	}
    });


});


router.get('/trailer/:url',function(req, res){
	res.render('trailer',{url:req.params.url});
});

module.exports = router;