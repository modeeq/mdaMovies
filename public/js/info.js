var  close = document.querySelector('.fa-times-circle');
var  trailer = document.querySelector('.mainImage');


trailer.addEventListener('click',function(){
	window.location.replace('/trailer/'+trailer.id);
});
trailer.addEventListener('mouseenter',function(){
	
});

close.addEventListener('click', function() {
    window.location.replace(document.referrer);

});