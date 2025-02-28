php ~/box/bin/sqlite-to-json metadata.db --reverse "books"
php ~/box/bin/calibre-image-cover-resize.php .


git add .
git ci -m 'update'
git push