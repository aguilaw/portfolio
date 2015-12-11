var pContainerHeight = $('#home-header').height();
var wScroll;
$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();

});

$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  if (wScroll >= pContainerHeight-250) {
		$('.site-nav-full').css({
      'background-color' : '#DFD7D0'
    });
  }
  else{
		$('.site-nav-full').css({
      'background-color' : 'transparent'
    });

  }
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
					/*close the work belt if it is open and slide left to reveal thumbs*/
					$('.work-belt').removeClass("slided");
			    $('.work-wrap').fadeOut();

	        $('html, body').delay(400).animate({
	            scrollTop: target.offset().top+250
	        }, duration);
	    }
	});
}

function smoothScrollTo (link,duration) {

	    var target = $(link);

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top+200
	        }, duration);
	    }
}

function workBelt() {

  //$(".trigger").remove();
  //$(".return").remove();

  $('.thumb-unit').click(function() {
	//	var workbeltHeight = $('.work-belt').height();
		var aboutHeight = $('#about').height();
	  pContainerHeight = $('#home-header').height();
		var barHeight= $('#code .info-wrap').height();
		var scrollOffset= wScroll-(aboutHeight+pContainerHeight-barHeight-25);
		if(scrollOffset < 0){
			scrollOffset=100;
		}

    $('.work-belt').addClass("slided");
		$('.work-wrap').css({'margin-top': (scrollOffset)+'px','display':'inline-block'});
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-wrap').fadeOut();
  });

}

function  workLoad() {
  $.ajaxSetup({ cache: true });

  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.data('name'),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newFolder+'.html';

    $('.project-load').html(spinner).load(newHTML);
  });

}
