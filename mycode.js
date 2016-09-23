$(document).ready(function() {
	
	$("p").hide();
	
	//$("#pic1").hide();
	//$("#pic2").hide();
	//$("#pic3").hide();
	
	$("h1").click(function() {
		$(this).next().fadeToggle(600);
	});
	$("img").click(function() {
		$(this).next().slideToggle(600);
	});
	$("h2").click(function() {
		$(this).next().fadeToggle(600);
	});
	/*$("div").click(function() {
		$(this).next().slideToggle(300);
	});*/
});
