var express = require('express'),
    request = require('request'),
    api = require('../movieApi'),
    passport = require('passport'),
    middleware = require('../middleware')
    User   = require('../schema/users');

var router = express.Router();

 router.use(function(req, res, next){
        res.locals.currentUser = req.user;
        next();
 });

var     Playing   = [],
        Popular   = [],
        Top       = [],
        Upcoming  = [],
        AllMovies = [];
  
 

function allMovies() {
   // clear();
    api.search_movie('popular');
    api.search_movie('now_playing');
    api.search_movie('top_rated');
    api.search_movie('upcoming');
}

var addMovie = function(type,movie){
    switch (type) {
                case "popular":
                    Popular.push(movie);
                    AllMovies.push(movie);
 
                    break;
                case "now_playing":
                    Playing.push(movie);
                    AllMovies.push(movie);

                    break;
                case "top_rated":
                    Top.push(movie);
                    AllMovies.push(movie);

                    break;
                case "upcoming":
                    Upcoming.push(movie);
                    AllMovies.push(movie);

                    break;
           }
 }
 
router.get('/', function(req, res) {
      allMovies();
 
    var interval = setInterval(function() {
        if (Playing.length >= 8 && Popular.length >= 8 && Top.length >= 8 && Upcoming.length >= 8) {
            clearInterval(interval);

            console.log("| all movies are ready");
            res.render('home', {
                playing_movies: Playing,
                popular_movies: Popular,
                top_movies: Top,
                upcoming_movies: Upcoming,
                AllMovies:AllMovies,

            });
             
 


        } else {
           // console.log('___Loading ... ___');
        }
    }, 1);

});

function clear(){
    
   if (Popular.length != 0) {
        Popular.length = 0;
    }
     if (Playing.length != 0) {
        Playing.length = 0;
    }
     if (Upcoming.length != 0) {
        Upcoming.length = 0;
    }
     if (Top.length != 0) {
        Top.length = 0;
    }

} 

router.get('/register',function(req,res){
    res.render('register');

});

router.post('/register',function(req,res){
        var name = req.body.name;
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        User.register(new User({
                name:name,
                email:email,
                username:username
        }),password,function(err,user){
            if (err) {
                console.log(err);
            }
            else{
                passport.authenticate('local')(req,res,function(){
                   console.log(user);
                   res.redirect('/');
                });
             }
        }

        );



});

router.get('/signin',function(req,res){
    res.render('signin');

});
 

router.post('/signin',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/register'
}),function(req,res){});

router.get('/signout',function(req,res){
    req.logout();
    res.redirect('/')
});
router.get('/favorites',middleware.isLoggedIn,function(req,res){
         User.findById(req.user,function(err,user){
                 res.render('favorites',{movies:user.favorites});

        });

 
});

router.post('/favorites/:id',middleware.isLoggedIn,function(req,res){
    var FoundMovies = 0;
    var i = 0;
    var movie;
          for(var i = 0 ; i < AllMovies.length; i++){
              if(AllMovies[i].id == req.params.id){
              movie =  api.AllMovies[i] ;
        }
     }
             User.findById(req.user.id,function(err,user){
                     user.favorites.push(movie);
                    for( i ; i < user.favorites.length; i++){ 
                           if( user.favorites[i].id == req.params.id){
                             
                      
                           }
                           else{
                             

                           }
 
                    }
 
             });
                            console.log(FoundMovies);

 });
 
 // middlewares

 


exports.router = router;
exports.addMovie = addMovie;


