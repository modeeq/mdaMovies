var bodyParser = require('body-parser'),
    express = require('express'),
    home = require('./routes/home'),
    trailer = require('./routes/trailer'),
    search = require('./routes/search'),
    info = require('./routes/info'),
    api = require('./movieApi'),
    mongoose = require('mongoose'),
    localStrategy = require('passport-local'),
    passport      = require('passport'),
    session      = require('express-session'),
    Users        = require('./schema/users');


mongoose.connect('mongodb://localhost/mdaMovies');



var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(session({
	secret:'this is the mda movies database',
	resave:false,
	saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());


app.use('/', home.router);
app.use('/trailer', trailer);
app.use('/search', search);
app.use('/info', info);

module.exports = app;
app.listen(process.env.PORT || 8000, function() {
    console.log('port 3000 is runing');
});
