document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


$(document).ready(function(){
  $('.sidenav').sidenav();
});

// Index Page Loader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(2000).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(2000)
		.fadeOut();
});
