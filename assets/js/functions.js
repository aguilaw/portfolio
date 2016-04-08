var oldSide=0;
var newSide=1;
var pContainerHeight = $('#home').height();
var wScroll;
$(function() {
	smoothScroll(300);
});


$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  if (wScroll >= pContainerHeight) {
		$('nav').fadeIn();
  }
  else{
		$('nav').fadeOut();

  }
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	  var target = $( $(this).attr('href') );

	  if( target.length ) {
	    event.preventDefault();
			/*close the work belt if it is open and slide left to reveal thumbs*/
	    $('html, body').delay(400).animate({
	        scrollTop: target.offset().top-100
	    }, duration);
	  }
	});
}

function  workLoad(clicked, projectLoad) {
  $.ajaxSetup({ cache: true });
        newFolder = clicked.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/projects/'+ newFolder+'.html';

  projectLoad.html(spinner).load(newHTML,function(response,status,xhr) {
		if (status='success') {
			projectLoad.css({'height':projectLoad.height()})
			currentBelt.css({height:currentBelt.height()}).animate({
				height: projectLoad.height()}
				, 200);

		}
		else {
			console.log("something went wrong, please refresh");
		}
	});
}
