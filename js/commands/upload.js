"use strict";
/**
 * @class Finder command "upload"
 * Upload files using iframe or XMLHttpRequest & FormData.
 * Dialog allow to send files using drag and drop
 *
 * @type  Finder.command
 * @author  Dmitry (dio) Levashov
 */
Finder.prototype.commands.upload = function() {
	var hover = this.fm.res('class', 'hover');

	this.disableOnSearch = true;
	this.updateOnSelect  = false;

	// Shortcut opens dialog
	this.shortcuts = [{
		pattern     : 'ctrl+u'
	}];

	/**
	 * Return command state
	 *
	 * @return Number
	 **/
	this.getstate = function() {
		return !this._disabled && this.fm.cwd().write ? 0 : -1;
	};


	this.exec = function(data) {
		var fm = this.fm,
			upload = function(data) {
				dialog.finderdialog('close');
				fm.upload(data)
					.fail(function(error) {
						dfrd.reject(error);
					})
					.done(function(data) {
						dfrd.resolve(data);
					});
			},
			dfrd, dialog, input, button, dropbox, pastebox;

		if (this.disabled()) {
			return $.Deferred().reject();
		}

		if (data && (data.input || data.files)) {
			return fm.upload(data);
		}

		dfrd = $.Deferred();


		input = $('<input type="file" multiple="true"/>')
			.change(function() {
				upload({input : input[0]});
			});

		button = $('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+fm.i18n('selectForUpload')+'</span></div>')
			.append($('<form/>').append(input))
			.hover(function() {
				button.toggleClass(hover)
			});

		dialog = $('<div class="finder-upload-dialog-wrapper"/>')
			.append(button);

		pastebox = $('<div class="ui-corner-all finder-upload-dropbox" contenteditable=true></div>')
			.focus(function() {
				if (this.innerHTML) {
					var type = this.innerHTML.match(/<[^>]+>/)? 'html' : 'text';
					var src = this.innerHTML;
					this.innerHTML = '';
					upload({files : [ src ], type : type});
				}
			})
			.bind('dragenter mouseover', function(){
				this.focus();
				$(pastebox).addClass(hover);
			})
			.bind('dragleave mouseout', function(){
				this.blur();
				$(pastebox).removeClass(hover);
			})
			.bind('mouseup keyup', function() {
				setTimeout(function(){
					$(pastebox).focus();
				}, 100);
			});

		if (fm.dragUpload) {
			dropbox = $('<div class="ui-corner-all finder-upload-dropbox">'+fm.i18n('dropFiles')+'</div>')
				.prependTo(dialog)
				.after('<div class="finder-upload-dialog-or">'+fm.i18n('or')+'</div>')
				.after(pastebox)
				.after('<div>'+fm.i18n('dropFilesBrowser')+'</div>')
				.after('<div class="finder-upload-dialog-or">'+fm.i18n('or')+'</div>')[0];

			dropbox.addEventListener('dragenter', function(e) {
				e.stopPropagation();
			  	e.preventDefault();
				$(dropbox).addClass(hover);
			}, false);

			dropbox.addEventListener('dragleave', function(e) {
				e.stopPropagation();
			  	e.preventDefault();
				$(dropbox).removeClass(hover);
			}, false);

			dropbox.addEventListener('dragover', function(e) {
				e.stopPropagation();
			  	e.preventDefault();
			  	$(dropbox).addClass(hover);
			}, false);

			dropbox.addEventListener('drop', function(e) {
				e.stopPropagation();
			  	e.preventDefault();
				var file = false;
				var type = '';
				if (e.dataTransfer && e.dataTransfer.files &&  e.dataTransfer.files.length) {
					file = e.dataTransfer.files;
					type = 'files';
				} else if (e.dataTransfer.getData('text/html')) {
					file = [ e.dataTransfer.getData('text/html') ];
					type = 'html';
				} else if (e.dataTransfer.getData('text')) {
					file = [ e.dataTransfer.getData('text') ];
					type = 'text';
				}
				if (file) {
					upload({files : file, type : type});
				}
			}, false);

		} else {
			$('<div>'+fm.i18n('dropFilesBrowser')+'</div>')
				.append(pastebox)
				.prependTo(dialog)
				.after('<div class="finder-upload-dialog-or">'+fm.i18n('or')+'</div>')[0];

		}

		fm.dialog(dialog, {
			title          : this.title,
			modal          : true,
			resizable      : false,
			destroyOnClose : true
		});

		return dfrd;
	};

};