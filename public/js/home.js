var movie = document.querySelectorAll('.info'),
    watch = document.querySelectorAll('.movie_trailer'),
    close = document.querySelector('.trailer i'),
    info_display = document.querySelector('.info'),
    info = document.querySelectorAll('.fa-heart-o');


info.forEach(function(info) {
    info.addEventListener('click', function() {
        	info.classList.toggle('fa-heart-o'); 
        	info.classList.toggle('fa-heart'); 

        	 
    });


});

watch.forEach(function(watch) {
    watch.addEventListener('click', function() {
        var url = watch.childNodes[1].href;

        window.location.replace(url);

    });


});


movie.forEach(function(movie) {
    movie.addEventListener('click', function() {
        window.location.replace('/info/' + movie.id);



    });


});

 