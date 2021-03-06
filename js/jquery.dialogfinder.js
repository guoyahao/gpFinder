
/**
 * @class dialogfinder - open Finder in dialog window
 *
 * @param  Object  Finder options with dialog options
 * @example
 * $(selector).dialogfinder({
 *     // some finder options
 *     title          : 'My files', // dialog title, default = "Files"
 *     width          : 850,        // dialog width, default 840
 *     autoOpen       : false,      // if false - dialog will not be opened after init, default = true
 *     destroyOnClose : true        // destroy Finder on close dialog, default = false
 * })
 * @author Dmitry (dio) Levashov
 **/
$.fn.dialogfinder = function(opts) {
	var position = 'finderPosition',
		destroy  = 'finderDestroyOnClose';

	this.not('.finder').each(function() {


		var doc     = $(document),
			toolbar = $('<div class="ui-widget-header dialogfinder-drag ui-corner-top">'+(opts.title || 'Files')+'</div>'),
			button  = $('<a href="#" class="dialogfinder-drag-close ui-corner-all"><span class="ui-icon ui-icon-closethick"/></a>')
				.appendTo(toolbar)
				.click(function(e) {
					e.preventDefault();

					node.dialogfinder('close');
				}),
			node    = $(this).addClass('dialogfinder')
				.css('position', 'absolute')
				.hide()
				.appendTo('body')
				.draggable({
					handle : '.dialogfinder-drag'
				})
				.finder(opts)
				.prepend(toolbar),
			finder = node.finder('instance');


		node.width(parseInt(node.width()) || 840) // fix width if set to "auto"
			.data(destroy, !!opts.destroyOnClose)
			.find('.finder-toolbar').removeClass('ui-corner-top');

		opts.position && node.data(position, opts.position);

		opts.autoOpen !== false && $(this).dialogfinder('open');

	});

	if (opts == 'open') {
		var node = $(this),
			pos  = node.data(position) || {
				top  : parseInt($(document).scrollTop() + ($(window).height() < node.height() ? 2 : ($(window).height() - node.height())/2)),
				left : parseInt($(document).scrollLeft() + ($(window).width() < node.width()  ? 2 : ($(window).width()  - node.width())/2))
			},
			zindex = 100;

		if (node.is(':hidden')) {

			$('body').find(':visible').each(function() {
				var $this = $(this), z;

				if (this !== node[0] && $this.css('position') == 'absolute' && (z = parseInt($this.zIndex())) > zindex) {
					zindex = z + 1;
				}
			});

			node.zIndex(zindex).css(pos).show().trigger('resize')

			setTimeout(function() {
				// fix resize icon position and make finder active
				node.trigger('resize').mousedown();
			}, 200);
		}
	} else if (opts == 'close') {
		var node = $(this);

		if (node.is(':visible')) {
			!!node.data(destroy)
				? node.finder('destroy').remove()
				: node.finder('close');
		}
	} else if (opts == 'instance') {
		return $(this).getFinder();
	}

	return this;
}

