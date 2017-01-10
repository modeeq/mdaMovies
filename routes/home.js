var   express   = require('express');


var router  = express.Router();

router.get('/',function(req, res){
	res.render('home');
});
router.get('/trailer/:url',function(req, res){
	res.render('trailer',{url:req.params.url});
});

module.exports = router;