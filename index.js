const booksContainer = document.querySelector(".main");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(book1);
console.log(myLibrary);

function displayBooks() {
  myLibrary.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;
    title.classList.add("title");
    cardDiv.appendChild(title);

    booksContainer.appendChild(cardDiv);
  });
}

displayBooks();
