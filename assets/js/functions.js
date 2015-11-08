var pContainerHeight = $('#home-header').height();
$(function() {
	smoothScroll(300);

});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

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
	        $('html, body').animate({
	            scrollTop: target.offset().top+400
	        }, duration);
	    }
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
