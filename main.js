let myLibrary = [];
let book = document.querySelector("#book");
let newBookButton = document.createElement("button");
newBookButton.textContent = "Add new book";
book.appendChild(newBookButton);
newBookButton.addEventListener("click", (e) => {
  addBookToLibrary(myLibrary);
  console.log(myLibrary);
});

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.readed
    );
  };
}

function addBookToLibrary(library) {
  let inputBook = prompt();
  let newDiv = document.createElement("div");
  library.push(inputBook);
  newDiv.textContent = inputBook;
  addDeleteButton(newDiv);
  book.appendChild(newDiv);
  newDiv.dataset.number = library.length - 1;
}

function addDeleteButton(div) {
  const button = document.createElement("button");
  button.textContent = "Delete";
  div.appendChild(button);
  button.addEventListener("click", (e) => {
    console.log(div);
    document.body.removeChild(div);
  });
}
