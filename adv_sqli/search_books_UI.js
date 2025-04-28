function searchBooks() {
    const bookName = document.getElementById('book_name').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'search_books.php?book_name=' + encodeURIComponent(bookName), true);
        xhr.onload = function() {
            if (this.status === 200) {
                document.getElementById('results').innerHTML = this.responseText;
            }
        }
    }