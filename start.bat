php ~/box/bin/sqlite-to-json metadata.db --reverse "books"
php ~/box/bin/calibre-image-cover-resize.php .
start http://localhost:4000
start php -S 127.0.0.1:4000
