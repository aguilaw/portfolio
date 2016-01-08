var belt=$('.belt');
var lw_left=$('.link-wrap-left');
var lw_right=$('.link-wrap-right');
var logo=$('.logo');
var about=$('#about');
var contact=$('#contact');
var code=$('#code');
var art=$('#art');
var design=$('#design');
var lastClicked=$('.nav-about');
var justClicked=null;
var lastShown=about;
var justShown=null;

$(function() {
//	smoothScroll(300);
	navigation();
	//workBelt();
});

function navigation(){
	$('.nav-link-left').click(function(){
		code.css({'top':'100%'});
		art.css({'top':'100%'});
		design.css({'top':'100%'});
		$('.nav-link').removeClass('selected');
		$(this).addClass('selected');
		//justClicked=$(this);
		resizeNavOnClick();
		belt.css({'transform':'translate(0%)'});

	});

	$('.nav-link-right').click(function(){
		contact.css({'top':'100%'});
		about.css({'top':'100%'});
		$('.nav-link').removeClass('selected');
		$(this).addClass('selected');
		//justClicked=$(this);
		resizeNavOnClick();
		belt.css({'transform':'translate(-42%)'});
	});

	logo.click(function(){
		$('.nav-link').removeClass('selected');
		logo.removeClass('small-logo');
		belt.css({'transform':'translate(-20%)'});
		lw_left.removeClass('stack-left');
		lw_right.removeClass('stack-right');
	});

/*
	$('.nav-about').click(function(){
		justShown=about;
		//lastShown.css({'z-index':'5'}).delay(400).css({'top':'100%'});
		//about.css({'top':'100%'});
		about.removeClass();
		lastShown.addClass('push-back');
		about.addClass('slide-top');
		//lastShown.removeClass('slide-top');

		//lastShown.delay(500).css({'top':'100%'});
		lastShown=justShown;
		lastClicked=justClicked;
	});
	$('.nav-contact').click(function(){
		justShown=contact;
		//contact.css({'top':'100%'});
		contact.removeClass();
		lastShown.addClass('push-back');
		contact.addClass('slide-top');
		//lastShown.removeClass('slide-top');
		//contact.removeClass('slide-top');


		//lastShown.delay(500).css({'top':'100%'});
		lastShown=justShown;
		lastClicked=justClicked;
	});*/

}

function resizeNavOnClick(){
	//lastClicked.removeClass('selected');
	//justClicked.addClass('selected');
	lw_right.addClass('stack-right');
	lw_left.addClass('stack-left');
	logo.addClass('small-logo');

}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	  var target = $( $(this).attr('href') );

	  if( target.length ) {
	    event.preventDefault();

	    $('html, body').delay(400).animate({
	        scrollTop: target.offset().top+250
	    }, duration);
	  }
	});
}
/*
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
*/
