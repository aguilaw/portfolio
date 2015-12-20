var pContainerHeight = $('#home-header').height();
var wScroll;
var currentBelt=null;
var currentProjectLoad=null;
var currentOriginalHeight=null;

$(function() {
	smoothScroll(300);
	workBelt();
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
			if (currentBelt!= null) {
				currentBelt.removeClass("slided").css({height:currentBelt.height()}).animate({
		        height: currentOriginalHeight
		    }, 200);
			}
	    $('html, body').delay(400).animate({
	        scrollTop: target.offset().top+250
	    }, duration);
	  }
	});
}

function workBelt() {
	var designWorkLoad=$('#design .project-load');
	var codeWorkLoad=$('#code .project-load');
	var hedronWorkLoad=$('#hedron .project-load');

	var designWorkWrap=$('#design .work-wrap');
	var codeWorkWrap=$('#code .work-wrap');
	var hedronWorkWrap=$('#hedron .work-wrap');

	var designWorkbelt=$('#design .work-belt');
	var codeWorkbelt=$('#code .work-belt');
	var hedronWorkbelt=$('#hedron .work-belt');


	var originalHeightDesign=designWorkbelt.height();
	var originalHeightHedron=hedronWorkbelt.height();
	var originalHeightCode=codeWorkbelt.height();


  $(' #design .thumb-unit').click(function() {
		currentBelt=designWorkbelt;
		currentProjectLoad=designWorkLoad;
		currentOriginalHeight=originalHeightDesign;

		currentBelt.addClass('slided');
		workLoad($(this),designWorkLoad);
  });

	$(' #code .thumb-unit').click(function() {
			currentBelt=codeWorkbelt;
			currentOriginalHeight=currentBelt.height();
			currentBelt.addClass('slided');
			workLoad($(this),codeWorkLoad);
  });

  $(' #hedron .thumb-unit').click(function() {
		currentBelt=hedronWorkbelt;
		currentOriginalHeight=currentBelt.height();
		workLoad($(this),hedronWorkLoad);
  });

  $('.work-return').click(function() {
		currentBelt.removeClass("slided").css({height:currentBelt.height()}).animate({
        height: currentOriginalHeight
    }, 200);
  });
}

function  workLoad(clicked, projectLoad) {
  $.ajaxSetup({ cache: true });
        newFolder = clicked.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newFolder+'.html';

  projectLoad.html(spinner).load(newHTML,function() {
			currentBelt.css({'height':'auto'});
	});
}
