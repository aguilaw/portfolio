var cubeStates= ["show-front","show-top","show-bottom","show-right","show-left","show-back"];
var homeCube= $('.cube-rotate');
var oldSide=0;
var newSide=1;
var pContainerHeight = $('#home').height();
var wScroll;
$(function() {
	smoothScroll(300);
	setInterval(turnCube,2000);
});


$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  if (wScroll >= pContainerHeight-250) {
		/*$('.site-nav-full').css({
      'background-color' : '#DFD7D0'
    });*/
  }
  else{
		/*$('.site-nav-full').css({
      'background-color' : 'transparent'
    });*/

  }
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	  var target = $( $(this).attr('href') );

	  if( target.length ) {
	    event.preventDefault();
			/*close the work belt if it is open and slide left to reveal thumbs*/
	    $('html, body').delay(400).animate({
	        scrollTop: target.offset().top
	    }, duration);
	  }
	});
}

function turnCube(){

	homeCube.each(function(index,value){
	  $(this).removeClass(cubeStates[oldSide]);
	  $(this).addClass(cubeStates[newSide]);
	});
  oldSide=newSide;

  if (oldSide == 5){
    newSide=0;
  }
  else {
    newSide = oldSide+1;
  }
};
