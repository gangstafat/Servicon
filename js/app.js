$(document).foundation();


$(document).ready(function() {
	$("#top-bar li a").click(function(event){
		//event.preventDefault();
	    $("#top-bar li a.active").removeClass('active');
	    $(this).addClass('active');
	});
});


