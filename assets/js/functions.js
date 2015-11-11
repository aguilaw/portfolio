var pContainerHeight = $('#home-header').height();
var wScroll;
$(function() {
	smoothScroll(300);
	workBelt();

});

$(window).scroll(function(){

  wScroll = $(this).scrollTop();

  if (wScroll >= pContainerHeight-250) {

    $('#about').css({
      'top' : '300px'
    });
    $('.site-nav-full').css({
      'background-color' : '#DFD7D0'
    });

    $('.header-position').css({
      'opacity' : '0'
    });
  }
  else{
    $('#about').css({
      'top' : '0'
    });
    $('.site-nav-full').css({
      'background-color' : 'transparent'
    });
		$('.header-position').css({
			'opacity' : '1'
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

	        $('html, body').delay(600).animate({
	            scrollTop: target.offset().top+400
	        }, duration);
	    }
	});
}

function smoothScrollTo (link,duration) {

	    var target = $(link);

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top+400
	        }, duration);
	    }
}

function workBelt() {

  //$(".trigger").remove();
  //$(".return").remove();

  $('.thumb-container .thumb').click(function() {
    $('.work-belt').addClass("slided");
		$('.work-wrap').css({'margin-top': (wScroll-1000)+'px','display':'inline-block'});
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-wrap').fadeOut();
  });

}

function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newFolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}
