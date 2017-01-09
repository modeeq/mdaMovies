var  close 		 = document.querySelector('#close'),
	 trailer 	 = document.querySelector('.trailer'),
	 iframe 	 = document.querySelector('.trailer'),
	 nav   		 = document.querySelector('.ui.secondary.pointing.menu'),
	 sections    = document.querySelectorAll('.section'),
 	 watch       = document.querySelectorAll('.movie_trailer');
 

 
close.addEventListener('click',hideVideo);
function hideVideo(){
close.style.visibility   = "hidden";
trailer.style.visibility = "hidden";
// iframe.parentNode.removeChild(iframe);

nav.style.opacity = 1;
sections.forEach(function(section){
section.style.opacity = 1;

});
 
 } 
watch.forEach(function(watch){

 watch.addEventListener('click',function(){
 
close.style.visibility   = "block";
trailer.style.visibility = "block";
  var link = watch.childNodes[1].href;
console.log(link);
document.querySelector('#ytplayer').src=link;
nav.style.opacity = 0;
sections.forEach(function(section){
section.style.opacity = 0;

});
 
 });

   
});
  

 
 