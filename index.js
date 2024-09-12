const booksContainer = document.querySelector(".main");
const bookDialog = document.querySelector("#bookDialog");
const delDialog = document.querySelector("#delDialog");
const bookForm = document.querySelector("#bookForm");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const cancelDelBtn = document.querySelector("#cancelDelBtn");
const submitDelBtn = document.querySelector("#submitDelBtn");

const myLibrary = [];
let delBookIndex = 0;

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
  booksContainer.textContent = "";
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

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete book 🗑️";
    removeBtn.addEventListener("click", () => {
      delBookIndex = myLibrary.indexOf(book);
      delDialog.showModal();
    });
    removeBtn.classList.add("removeBtn");
    cardDiv.appendChild(removeBtn);

    booksContainer.appendChild(cardDiv);
  });
  const addBtn = document.createElement("div");
  addBtn.classList.add("book-card");
  const addtext = document.createElement("h3");
  addtext.textContent = "Add a book";
  addBtn.appendChild(addtext);
  const add = document.createElement("button");
  add.textContent = "+";
  add.addEventListener("click", () => {
    bookDialog.showModal();
  });
  add.classList.add("addBtn");
  addBtn.appendChild(add);
  booksContainer.appendChild(addBtn);
}

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookDialog.close();
  bookForm.reset();
});

cancelDelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  delDialog.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const bookToAdd = new Book(title, author, pages, read);
  addBookToLibrary(bookToAdd);
  displayBooks();
  bookDialog.close();
  bookForm.reset();
});

submitDelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLibrary.splice(delBookIndex, 1);
  displayBooks();
  delDialog.close();
});

displayBooks();
