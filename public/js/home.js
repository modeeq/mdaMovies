var  close 		 = document.querySelector('#close'),
	 trailer 	 = document.querySelector('.trailer'),
	 iframe 	 = document.querySelector('.trailer'),
	 nav   		 = document.querySelector('.ui.secondary.pointing.menu'),
	 sections    = document.querySelectorAll('.section'),
 	 watch       = document.querySelectorAll('.movie_trailer');
 
 
watch.forEach(function(watch){
	watch.addEventListener('click',function(){
   var url = watch.childNodes[1].href;

		window.location.replace(url);
 
 });

   
});

 
 
 