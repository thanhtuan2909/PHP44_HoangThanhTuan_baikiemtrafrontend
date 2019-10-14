(function($) { "use strict";

	$(function() {
		var header = $(".menu-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('menu-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('menu-style');
			}
		});
	});		

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	 
	
})(jQuery); 