$(document).ready(function() {

	$('#menu').addClass('fermee0');
	$('#video').addClass('fermee1');
	$('#website').addClass('fermee2');
	$('#dev').addClass('fermee3');
	$('#sticky').addClass('fermee4');
	$('#terminal').addClass('fermee5');
	$('#artsnum').addClass('fermee6');
	$('#apropos').addClass('fermee7');
	$('#contact').addClass('fermee8');
});


$('.frame').mousedown(function(){
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.frame').not(".maximized").resizable({
	alsoResize: ".active .content",
	minWidth: 200,
	minHeight: 100
}).draggable({
	handle: ".topbar"
});

$('.maxbtn').click(function(){
	$(this).parent().parent().toggleClass("maximized");
});



$('.xbtn0').click(function (){
	 $('#menu').addClass('fermee0');
});

$('#ouvrirmenu').click(function (){
	$('#menu').removeClass('fermee0');
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.xbtn1').click(function(){
	$('#video').addClass('fermee1');
});

$('#ouvrirVideo').click(function(){
	$('#video').removeClass('fermee1');
	$(".active").removeClass("active");
	$(this).addClass("active");
});


$('.xbtn2').click(function(){
	$('#website').addClass('fermee2');

});


$('#ouvrirWebsite').click(function(){
	$('#website').removeClass('fermee2');
	$(".active").removeClass("active");
	$(this).addClass("active");
});


$('.xbtn3').click(function(){
	$('#dev').addClass('fermee3');

});


$('#ouvrirdev').click(function(){
	$('#dev').removeClass('fermee3');
	$(".active").removeClass("active");
	$(this).addClass("active");
});


$('.xbtn4').click(function(){
	$('#sticky').addClass('fermee4');
});


$('#ouvrirSticky').click(function(){
	$('#sticky').removeClass('fermee4');
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.xbtn5').click(function (){
	$('#terminal').addClass('fermee5');
});

$('#ouvrirterminal').click(function (){
	$('#terminal').removeClass('fermee5');
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.xbtn6').click(function (){
	$('#artsnum').addClass('fermee6');
});

$('#ouvrirartsnum').click(function (){
	$('#artsnum').removeClass('fermee6');
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.xbtn7').click(function (){
	$('#apropos').addClass('fermee7');
});

$('#ouvrirapropos').click(function (){
	$('#apropos').removeClass('fermee7');
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.xbtn8').click(function (){
	$('#contact').addClass('fermee8');
});

$('#ouvrircontact').click(function (){
	$('#contact').removeClass('fermee8');
	$(".active").removeClass("active");
	$(this).addClass("active");
});





