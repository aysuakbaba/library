const addBtn = document.getElementById("addBtn");
const form = document.querySelector(".form");
const cancelBtn = document.querySelector(".cancel");
const middleFirst = document.querySelector(".middleFirst");
const formPage = document.querySelector(".formPage");
const middle = document.querySelector(".middle");

const Book =(title="unknown" ,author="unknown" , pages="0" ,date="00/00/0000" , read=false)=>{
    return{title,author,pages,date,read};
}

let books=[];

addBtn.addEventListener("click",()=>{
    formPage.style.display = "flex";
})

cancelBtn.addEventListener("click",()=>{
    formPage.style.display="none";

})

const addBook = ()=>{
    const newBook = getBookValues();
    books.push(newBook);
    form.reset();
    
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formPage.style.display="none";
    middleFirst.style.display="none";
    middle.style.display="grid";
    addBook();
    updateBooks();
})

const getBookValues =()=>{
    const title = document.querySelector("#bookName").value;
    const author = document.querySelector("#authorName").value;
    const pages = document.querySelector("#pages").value;
    const date = document.querySelector("#date").value;
    const readCheck = document.querySelector("#readCheck").checked;
    return Book(title, author,pages,date,readCheck);
}

const createCard =(book)=>{
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
    read.classList.add("isRead");
    deleteBook.classList.add("delete");
    bottomDiv.classList.add("bottomCard");
    

    title.textContent= book.title;
    author.textContent="by" + book.author;
    pages.textContent = `${book.pages} pages`;
    date.textContent=book.date;
    deleteBook.textContent = "Delete";
    read.textContent="Read";
    readSituation.textContent="Read";

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
}

const updateBooks =()=>{
    for(let book of books){
        createCard(book);
    }
}