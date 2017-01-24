var  close = document.querySelector('.fa-times-circle');
var  trailer = document.querySelector('.mainImage');
var  play = document.querySelector('.fa-play-circle');

trailer.addEventListener('mouseenter',function(){
			play.style.display = 'block';
  			trailer.style.opacity = .7;

 });
  
trailer.addEventListener('mouseleave',function(){
			play.style.display = 'none';
 
 });


play.addEventListener('click',function(){
 	window.location.replace('/trailer/'+trailer.id);
});

 play.addEventListener('mouseenter',function(){
			play.style.opacity = 1;
});
  play.addEventListener('mouseleave',function(){
			play.style.opacity = .5;
});
close.addEventListener('click', function() {
    window.location.replace(document.referrer);

});