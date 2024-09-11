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
book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary(book2);

function displayBooks() {
  myLibrary.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;
    title.classList.add("title");
    cardDiv.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    author.classList.add("author");
    cardDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    pages.classList.add("pages");
    cardDiv.appendChild(pages);

    const read = document.createElement("button");
    read.textContent = book.read ? "Read" : "Not Read";
    read.style.backgroundColor = book.read ? "green" : "red";
    read.addEventListener("click", () => {
      book.read = !book.read;
      read.textContent = book.read ? "Read" : "Not Read";
      read.style.backgroundColor = book.read ? "green" : "red";
    });
    read.classList.add("readBtn");
    cardDiv.appendChild(read);

    booksContainer.appendChild(cardDiv);
  });
  const addBtn = document.createElement("div");
  addBtn.classList.add("book-card");
  const add = document.createElement("button");
  add.textContent = "+";
  add.addEventListener("click", () => {});
  add.classList.add("addBtn");
  addBtn.appendChild(add);
  booksContainer.appendChild(addBtn);
}

displayBooks();
