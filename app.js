var   bodyParser   =  require('body-parser'),
	  express 	   =  require('express'),
	  home         =  require('./routes/home');



var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');

app.use('/',home);



module.exports = app;
app.listen(3000,function(){
	console.log('port 3000 is runing');
});

