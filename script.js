const addBtn = document.getElementById("addBtn");
const form = document.querySelector(".formPage");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");

const Book =(title="unknown" ,author="unknown" , pages="0" ,date="00/00/0000" , read=false)=>{
    return(title,author,pages,date,read);
}

let books=[];

addBtn.addEventListener("click",()=>{
    form.style.display = "flex";
})

cancelBtn.addEventListener("click",()=>{
    form.style.display="none";

})

saveBtn.addEventListener("click" ,()=>{ 
    books.push(getBookValues());
})

const getBookValues =()=>{
    const title = document.querySelector("#bookName").value;
    const author = document.querySelector("#authorName").value;
    const pages = document.querySelector("#pages").value;
    const date = document.querySelector("#date").value;
    const readCheck = document.querySelector("#readCheck").checked;
    return Book(title, author,pages,date,readCheck);
}

