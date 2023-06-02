const button = document.querySelector(".newBook");
const returnButton = document.querySelector(".return");
const submitBook = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#title");
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
  // let read = true
  let newBook = new Book(title, author, pages, read);
  Library.push(newBook);
}

function getReadValue() {
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  console.log(document.querySelector('input[name="read"]:checked').value);
}

function handleSubmit(e) {
  // e.preventDefault();
  console.log("handle submit");
  console.log(title.value + "is title");
  const newBook = new Book(title.value, author.value, pages.value, 1);
  addBookToLibrary(title.value, author.value, pages.value, yes);
  displayBook(newBook);
}

function displayBook(book) {
  // let i = 0;
  const tr = document.createElement("tr");
  Object.keys(book).forEach((prop) => {
    if (prop != "id") {
      let $newTd = document.createElement("td");
      $newTd.textContent = book[prop];
      if (prop == "read") $newTd.textContent = book[prop] ? "Read" : "Not read";
      tr.appendChild($newTd);
    } else {
      console.log("do nothing");
    }
    // edit.addEventListener('click',console.log("edit"))
    // delete_.addEventListener('click',console.log("delete_"))
  });
  //   console.log(i);
  let _newTd = document.createElement("td");
  const _read_ = document.createElement("button");
  _read_.setAttribute("id", "read");
  _read_.innerText = "Change Read Status";
  _read_.addEventListener("click", () => console.log("read"));
  //   _read_.setAttribute('title',"haskfaslkdf")
  _newTd.appendChild(_read_);
  tr.appendChild(_newTd);
  let _newTd_ = document.createElement("td");
  const _edit_ = document.createElement("button");
  _edit_.setAttribute("id", "edit");
  _edit_.innerText = "Edit";
  _edit_.addEventListener("click", () => console.log("edit"));

  //   _edit_.setAttribute('title',"haskfaslkdf")
  _newTd_.appendChild(_edit_);
  tr.appendChild(_newTd_);
  let newTd_ = document.createElement("td");
  const _delete_ = document.createElement("button");
  _delete_.setAttribute("id", "delete");
  _delete_.innerText = "Delete";
  _delete_.addEventListener("click", () => console.log("delete"));

  //   _delete_.setAttribute('title',"haskfaslkdf")
  newTd_.appendChild(_delete_);
  tr.appendChild(newTd_);
  tbody.appendChild(tr);
  // if(i )
}
// document.addEventListener("DOMContentLoaded", () => {
//   returnButton.addEventListener("click", toggleForm);
//   button.addEventListener("click", toggleForm);

// });

document.addEventListener("DOMContentLoaded", () => {
  returnButton.addEventListener("click", toggleForm);
  button.addEventListener("click", toggleForm);
  submitBook.addEventListener("click", handleSubmit);
  for (let i = 0; i < Library.length; i++) {
    const book = Library[i];
    console.log(book);

    displayBook(book);
  }
});

// document.addEventListener('DOMContentLoaded',()=>{
//     returnButton.addEventListener('click',toggleForm)
//     button.addEventListener('click',toggleForm);
// })
