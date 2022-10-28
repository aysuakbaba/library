const addBtn = document.getElementById("addBtn");
const form = document.querySelector(".form");
const cancelBtn = document.querySelector(".cancel");
const middleFirst = document.querySelector(".middleFirst");
const formPage = document.querySelector(".formPage");
const middle = document.querySelector(".middle");

const Book = (
  title = "unknown",
  author = "unknown",
  pages = "0",
  date = "00/00/0000",
  read = false
) => {
  return { title, author, pages, date, read };
};

let books = [];

addBtn.addEventListener("click", () => {
  formPage.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  formPage.style.display = "none";
});

const addBook = () => {
  const newBook = getBookValues();
  books.push(newBook);
  form.reset();
  save();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formPage.style.display = "none";
  middleFirst.style.display = "none";
  middle.style.display = "grid";
  addBook();
  updateBooks();
});

const getBookValues = () => {
  const title = document.querySelector("#bookName").value;
  const author = document.querySelector("#authorName").value;
  const pages = document.querySelector("#pages").value;
  const date = document.querySelector("#date").value;
  const readCheck = document.querySelector("#readCheck").checked;
  return Book(title, author, pages, date, readCheck);
};

const resetCard = () => {
  middle.innerHTML = "";
};

const updateBooks = () => {
  resetCard();
  for (let book of books) {
    createCard(book);
    middle.style.display = "grid";
  }
};
const createCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("h5");
  const pages = document.createElement("h6");
  const date = document.createElement("h6");
  const readOrNot = document.createElement("div");
  const read = document.createElement("button");
  const deleteBook = document.createElement("button");
  const bottomDiv = document.createElement("div");
  const readSituation = document.createElement("h5");
  bookCard.classList.add("bookCards");
  deleteBook.classList.add("delete");
  bottomDiv.classList.add("bottomCard");
  book.read ? read.classList.add("isRead") : read.classList.add("notReadBtn");
  readSituation.textContent = book.read ? "Read" : "Not Read";
 

  title.textContent = book.title;
  author.textContent = "by " + book.author;
  pages.textContent = `${book.pages} pages`;
  date.textContent = book.date;
  deleteBook.textContent = "Delete";
  read.textContent = "Read";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(date);
  bookCard.appendChild(readOrNot);
  bottomDiv.appendChild(readSituation);
  readOrNot.appendChild(read);
  readOrNot.appendChild(deleteBook);
  bookCard.appendChild(bottomDiv);
  bottomDiv.appendChild(readSituation);
  middle.appendChild(bookCard);

  read.addEventListener("click", () => {
    if (readSituation.textContent === "Read") {
      readSituation.textContent = "Not Read";
      read.classList.remove("isRead");
      read.classList.add("notReadBtn");
      book.read = false;
      save();
    } else {
      readSituation.textContent = "Read";
      read.classList.add("isRead");
      book.read = true;
      save();
    }
  });

  deleteBook.addEventListener("click", () => {
    removeBookCard(bookCard);
    removeCardFromStorage(book);
    if(middle.innerHTML===""){
        middleFirst.style.display="flex";
        save();
    }else{
        middleFirst.style.display="none";
        save();
    }
    
    
  });

};


const removeBookCard = (bookCard) => {
  middle.removeChild(bookCard);
};

const removeCardFromStorage = (cardObject) => {
  books.forEach((book, index) => {
    if (book === cardObject) {
      books.splice(index, 1);
    }
  });
  save();
};


document.addEventListener("DOMContentLoaded", () => {
  load();
  updateBooks();
});

const save = () => {
  localStorage.setItem("library", JSON.stringify(books));
};

const load = () => {
  const gottenBooks = JSON.parse(localStorage.getItem("library"));
  if (gottenBooks) {
    books = gottenBooks.map((book) => JsonToBook(book));
    middleFirst.style.display = "none";
  } else {
    books = [];
  }
  
};

const JsonToBook = (book) => {
  return Book(book.title, book.author, book.pages, book.date, book.read);
};
