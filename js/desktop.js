$(document).ready(function() {

	$('#menu').addClass('fermee0');
	$('#videoDC').addClass('fermee1');
	$('#toutdoux').addClass('fermee2');
	$('#dev').addClass('fermee3');
	$('#sticky').addClass('fermee4');
	$('#terminal').addClass('fermee5');
	$('#artsnum').addClass('fermee6');
	$('#apropos').addClass('fermee7');
	$('#contact').addClass('fermee8');
	$('#pug').addClass('fermee9');
	$('#colors').addClass('fermee10');
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
	$('#videoDC').addClass('fermee1');
});
$('#ouvrirVideoDC').click(function(){
	$('#videoDC').removeClass('fermee1');
	$(".active").removeClass("active");
	$(this).addClass("active");
});
$("#ouvrirVideoDC").click(function(){
	$("#videoDC-iframe").attr("src", "//www.ultimedia.com/deliver/generic/iframe/mdtk/01921679/src/qsrqxlu/zone/1/showtitle/1/");
});
$(".reload-videoDC").click(function(){
	$("#videoDC-iframe").attr("src", $("#videoDC-iframe").attr("src"));
});
$('.xbtn1').click(function(){
	$("#videoDC-iframe").attr("src", "about:blank");
});



$('.xbtn2').click(function(){
	$('#toutdoux').addClass('fermee2');
});
$('#ouvrirtoutdoux').click(function(){
	$('#toutdoux').removeClass('fermee2');
	$(".active").removeClass("active");
	$(this).addClass("active");
});
$("#ouvrirtoutdoux").click(function(){
	$("#toutdoux-iframe").attr("src", "https://stevenbachimont.github.io/toutdoux/");
});
$(".reload-toutdoux").click(function(){
	$("#toutdoux-iframe").attr("src", $("#toutdoux-iframe").attr("src"));
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
$("#ouvrirterminal").click(function(){
	$("#terminal-iframe").attr("src", "https://stevenbachimont.github.io/terminal/");
});
$(".reload-terminal").click(function(){
	$("#terminal-iframe").attr("src", $("#terminal-iframe").attr("src"));
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

$('.xbtn9').click(function (){
	$('#pug').addClass('fermee9');
});
$('#ouvrirpug').click(function (){
	$('#pug').removeClass('fermee9');
	$(".active").removeClass("active");
	$(this).addClass("active");
});
$("#ouvrirpug").click(function(){
	$("#pug-iframe").attr("src", "https://stevenbachimont.github.io/pug-zone/");
});
$(".reload-pug").click(function(){
	$("#pug-iframe").attr("src", $("#pug-iframe").attr("src"));
});


$('.xbtn10').click(function (){
	$('#colors').addClass('fermee10');
});
$('#ouvrirfenetrefantome').click(function (){
	$('#colors').removeClass('fermee10');
	$(".active").removeClass("active");
	$(this).addClass("active");
});







