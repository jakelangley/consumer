jQuery(document).ready(function($){
	$('.home .articlelist .eael-grid-post-holder-inner').each(function(){
		$(this).find('.post-carousel-categories a').prependTo($(this).find('.eael-entry-wrapper .eael-entry-header'));
	})
	$('.ht').mouseover(function(){
		$(this).find('.hc').css('display', 'block');
	})
	var n = 0;
	$( ".ht" )
	  .mouseenter(function() {
		n += 1;
		$( this ).find( ".hc" ).css('display', 'block');
	  })
	  .mouseleave(function() {
		$( this ).find( ".hc" ).css('display', 'none');
	  });
})