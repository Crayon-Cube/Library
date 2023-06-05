const button = document.querySelector(".newBook");
const returnButton = document.querySelector(".return");
const submitBook = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelectorAll("#read");
const edit = document.querySelector("#edit");
const delete_ = document.querySelector("#delete");

const form = document.querySelector(".form");
const table = document.querySelector(".table");
const td = document.querySelector("td");
const tbody = document.querySelector("tbody");

function toggleForm() {
  form.classList.toggle("hidden");
  table.classList.toggle("hidden");
  button.classList.toggle("hidden");
}

const Library = [
  {
    id: "Harry Potter",
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 364,
    read: 1,
  },
  {   
    id: "Harry Potter 1",
    
    title: "Harry Potter 1",
    author: "JK Rowling",
    pages: 364,
    read: 0,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = title;
}

function addBookToLibrary(title, author, pages, read) {
  tbody.Textcontent = ''

  let newBook = new Book(title, author, pages, read);
  Library.push(newBook);
}

// function removeDuplicate(){

// }

function displayAll() {
  tbody.Textcontent = ''
  // Library.filter(removeDuplicate)
  for (let i = 0; i < Library.length; i++) {
    const book = Library[i];
    console.log("book about to be generated"+book);
    Library.filter((boook) => boook.id === book.id);
    
    displayBook(book);
  }
}

function getReadValue() {
  return document.querySelector('input[name="read"]:checked').value == "yes"
  ? 1
  : 0;
}

function handleSubmit(e) {
  console.log("submit fucntion working");
  const readValue = getReadValue();
  const newBook = new Book(title.value, author.value, pages.value, readValue);
  addBookToLibrary(title.value, author.value, pages.value, readValue);
  displayBook(newBook);
}

function ChangeRead(book) {
  book.read = !book.read
   updateBook(book);
}

function updateBook(book,newTd) {
  tbody.Textcontent = ''

  const oldbookIndex = Library.findIndex(((book_)=>book_.id ==  book.id))
  console.log("read value of updatedbook"+ Library[oldbookIndex].read);
  Library[oldbookIndex].read;
  console.log(book + "Updated book");
  console.log( "Library state")
  console.log(Library );
  newTd.textContent =  Library[oldbookIndex].read ? "Read" :"Not Read"
  // displayBook(book)
  // Library.replace(oldbook,newBook)
}

function deleteBook(tr) {
  tr.outerHTML = ""
}

function displayBook(book) {
 
 Library.filter((boook) => boook.id == book.id);
  const tr = document.createElement("tr");
  Object.keys(book).forEach((prop) => {
    
    if (prop != "id") {
      let $newTd = document.createElement("td");
      $newTd.textContent = book[prop];
      if (prop == "read") $newTd.textContent = book[prop] ? "Read" : "Not read";
      tr.appendChild($newTd);
    } else {
      console.log("do nothing if book.id beacause we dont want any row for");
    }
  });
  
  let _newTd = document.createElement("td");
  const _read_ = document.createElement("button");
  _read_.setAttribute("id", "read");
  _read_.innerText = "Change Read Status";
  _read_.addEventListener("click",() =>ChangeRead(book,tr));
  
  _newTd.appendChild(_read_);
  tr.appendChild(_newTd);
  let _newTd_ = document.createElement("td");
  const _edit_ = document.createElement("button");
  _edit_.setAttribute("id", "edit");
  _edit_.innerText = "Edit";
  _edit_.addEventListener("click", () => console.log("edit"));
  
  _newTd_.appendChild(_edit_);
  tr.appendChild(_newTd_);
  let newTd_ = document.createElement("td");
  const _delete_ = document.createElement("button");
  _delete_.setAttribute("id", "delete");
  _delete_.innerText = "Delete";
  _delete_.addEventListener("click", () => deleteBook(tr,));

  newTd_.appendChild(_delete_);
  tr.appendChild(newTd_);
  tbody.appendChild(tr);
}

document.addEventListener("DOMContentLoaded", () => {
returnButton.addEventListener("click", toggleForm);
button.addEventListener("click", toggleForm);
submitBook.addEventListener("click", handleSubmit);
  displayAll();
});
