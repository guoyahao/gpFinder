gpFinder
========

<pre>
              ______ _           _
             |  ____(_)         | |
   __ _ _ __ | |__   _ _ __   __| | ___ _ __
  / _` | '_ \|  __| | | '_ \ / _` |/ _ \ '__|
 | (_| | |_) | |    | | | | | (_| |  __/ |
  \__, | .__/|_|    |_|_| |_|\__,_|\___|_|
   __/ | |
  |___/|_|

an adaptation of
      _ ______ _           _
     | |  ____(_)         | |
  ___| | |__   _ _ __   __| | ___ _ __
 / _ \ |  __| | | '_ \ / _` |/ _ \ '__|
|  __/ | |    | | | | | (_| |  __/ |
 \___|_|_|    |_|_| |_|\__,_|\___|_|

</pre>

gpFinder is an open-source file manager based on the elFinder project (http://elfinder.org)
gpFinder is written in JavaScript using jQuery UI and can be easily integrated with all of the
most popular web editors (elRTE, CKEditor, TinyMCE)


Features
--------

 * All operations with files and folders on a remote server (copy, move,
   upload, create folder/file, rename, etc.)
 * High performance server beckend and light client UI
 * Multi-root support
 * Local file system, MySQL, FTP volume storage drivers
 * Background file upload with Drag & Drop HTML5 support
 * List and Icons view
 * Keyboard shortcuts
 * Standard methods of file/group selection using mouse or keyboard
 * Move/Copy files with Drag & Drop
 * Archives create/extract (zip, rar, 7z, tar, gzip, bzip2)
 * Rich context menu and toolbar
 * Quicklook, preview for common file types
 * Edit text files and images
 * "Places" for your favorites
 * Calculate directory sizes
 * Thumbnails for image files
 * Easy to integrate with web editors (elRTE, CKEditor, TinyMCE)
 * Flexible configuration of access rights, upload file types, user interface
   and other
 * Extensibility
 * Simple client-server API based on JSON


Requirements
------------

### Client
 * Modern browser. gpFinder was tested in Firefox 12, Internet Explorer 8+,
   Safari 6, Opera 12 and Chrome 19

### Server
 * Any web server
 * PHP 5.2+ (for thumbnails - mogrify utility or GD/Imagick module)


3rd party connectors
--------------------
 * [Python](https://github.com/Studio-42/elfinder-python)
 * [Django](https://github.com/mikery/django-elfinder)
 * [Ruby/Rails](https://github.com/phallstrom/el_finder)
 * [Java Servlet](https://github.com/Studio-42/elfinder-servlet)


Support
-------
 * [Wiki](https://github.com/oyejorge/gpFinder/wiki)
 * [Issues](https://github.com/oyejorge/gpFinder/issues)


License
-------

gpFinder is issued under a 3-clauses BSD license.

<pre>
Copyright (c) 2012, gpFinder
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of gpFinder nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL "gpFinder" BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</pre>
