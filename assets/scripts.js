(function($) {
	var Utils = {
		init: function() {
			this.lazyload();
		},
		lazyload: function() {
			var sections = $('section[data-img]');
			sections.each(function(i, el) {
				var section = $(el),
					frame = $('<div class="frame"></div>'),
					url = section.attr('data-img'),
					img = new Image();
				section.prepend(frame);
				img.addEventListener('load', function() {
					frame
						.css({
							'background-image': 'url(' + url +')'
						})
						.addClass('loaded');
				});
				img.src = url;
			});
		}
	};

	$(document).ready(function() {
		Utils.init();
	});
})(jQuery);