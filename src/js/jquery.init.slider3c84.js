var AUS = AUS || {};
AUS.aus_slider = {

	/**
	 * Get the settings off the data attribute
	 * Mangle them here
	 *
	 * @param $element jQuery HTML element
	 * @returns Object
	 */
	getSettingsOfElement: function($element) {
		var settings = $.extend({}, $element.data('settings') || {});

		if ($element.hasClass('carouselslider')) {
			settings.animation = 'slide';
			settings.animationLoop = false;
		} else if ($element.hasClass('thumbnailslider')) {
			var $controls = $element.next('.thumbnailcontrols');

			$controls.flexslider({
				animation: 'slide',
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: settings.thumbnailsettingsItemWidth,
				asNavFor: $element
			});

			$.extend(settings, {
				sync: $controls
			});
		}
		return settings;
	},

	/**
	 * initialize a slider
	 *
	 * @param $element jQuery HTML element
	 */
	initializeSlider: function($element) {
		if ($element.hasClass('thumbnailcontrols')) return false;
		$element.flexslider(this.getSettingsOfElement($element));
	},

	/**
	 * @param $element jQuery HTML element
	 */
	initializeCamera: function($element) {
		$element.camera(this.getSettingsOfElement($element));
	},

	/**
	 * Initializes all available sliders on the page
	 */
	initFlexslider: function($context){
		var that = this;

		$context.find('.flexslider').each(function(i, element) {
			var $element = $(element);

			if ($element.hasClass('cameraslider')) {
				that.initializeCamera($element);
			} else {
				that.initializeSlider($element);
				setTimeout(function() {
					var $ifIframeInSlide = $('.flexslider li iframe');

					$ifIframeInSlide.each(function() {
						var $this = $(this);
						var $slides = $this.closest('.slides').height();
						$this.height($slides);
						var $sliderViewportHeight = $this.closest('.flex-viewport').height();
						$this.height($sliderViewportHeight);
					});
				}, 1000);
			}
		});
	}
};


(function($, undefined) {
	AUS.aus_slider.initFlexslider($(document));
})(jQuery);