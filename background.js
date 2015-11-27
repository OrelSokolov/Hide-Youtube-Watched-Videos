function HideWatched(){
	$('.watched').each(function(){
	   next = $(this).next('.yt-lockup-content');
	   next.find('.yt-lockup-byline').remove();
	   next.find('.yt-lockup-meta').remove();
	   next.find('.yt-lockup-description').remove();
	   $(this).remove();
	});

	$('#logo-container').attr('href', '/feed/subscriptions')

}

setInterval(HideWatched, 1000);

