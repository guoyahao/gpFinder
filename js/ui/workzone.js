
/**
 * @class finderworkzone - Finder container for nav and current directory
 * @author Dmitry (dio) Levashov
 **/
$.fn.finderworkzone = function(fm) {
	var cl = 'finder-workzone';

	this.not('.'+cl).each(function() {
		var wz     = $(this).addClass(cl),
			wdelta = wz.outerHeight(true) - wz.height(),
			parent = wz.parent();

		parent.add(window).bind('resize', function() {
				var height = parent.height();

				parent.children(':visible:not(.'+cl+')').each(function() {
					var ch = $(this);

					if (ch.css('position') != 'absolute') {
						height -= ch.outerHeight(true);
					}
				});

				wz.height(height - wdelta);
			});
	});
	return this;
}


