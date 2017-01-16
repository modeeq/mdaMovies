var movie = document.querySelectorAll('.movie'),
    watch = document.querySelectorAll('.movie_trailer'),
    close = document.querySelector('.info i');
info_display = document.querySelector('.info');

watch.forEach(function(watch) {
    watch.addEventListener('click', function() {
        var url = watch.childNodes[1].href;

        window.location.replace(url);

    });


});


movie.forEach(function(movie) {
    movie.addEventListener('click', function() {
        window.location.replace('http://localhost:3000/info/' + movie.id);



    });


});
