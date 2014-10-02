(function($) {

    $.fn.scrollSlide = function(options) {
    	// Default Settings
		var settings = $.extend({
			direction   : 'right', 	// Direction (Slide From)
			speed       : 1000,  	// Speed of animation
			scrollstart : 200,  	// Scroll position to start slide in
			slideback   : false 	// Should object slide back on scroll up?
		}, options);

		return this.each( function() {
			var object = $(this);
			
			// Hide object initially
			object.css('display','none');

			// On scroll
			$(window).scroll(function(e){
				var y = $(this).scrollTop();

				// Check scroll start value
				if(y >= settings.scrollstart){
					object.show('slide', {direction: settings.direction}, settings.speed);
				}

				// If object should slide back out on scroll up
				if(y < settings.scrollstart && settings.slideback == true){				
					object.hide('slide', {direction: settings.direction}, settings.speed);
				}

				
			});
		});

	};

}(jQuery));
