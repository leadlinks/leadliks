$(document).ready(function(){
	$('img[data-toggle="tooltip"]').tooltip();

	$('.carousel').carousel({
		interval: false
	});

	$('.refresh-button').click(function(click) {
		click.preventDefault();
		$('.pr-comment-wrap').each(function(){
			$(this).toggleClass('show-comment');
		});
	});
});