const allAuthors = createHash(httpGet(CONFIG.authors), "sort");
const books = getBooks();

function createHash(arr, key) {
    var ret = {};
    arr.forEach((element) => {
        ret[element[key]] = element;
    });
    return ret;
}

function getBooks() {
    var bs = httpGet(CONFIG.books);
    for (var i in bs) {
        bs[i].author = author_name(bs[i].author_sort);
        bs[i].img = `/${bs[i].path}/cover_min.jpg`;
    }
    return bs;
}
function author(sort) {
    var a = allAuthors[sort];
    return a ? a : null;
}
function author_name(sort) {
    var a = author(sort);
    if (!a) return sort;
    return a.name;
}

function getFiles(bookId) {
    let bookData = null;
    if (!bookData) {
        bookData = httpGet(CONFIG.bookData);
    }

    var files = bookData.filter(function (item) {
        return item.book == bookId;
    });
    return files;
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.head.getElementsByTagName("title")[0].textContent =
        CONFIG.sitename;
});
