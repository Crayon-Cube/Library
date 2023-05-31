const button = document.querySelector(".newBook")
const returnButton = document.querySelector(".return")

const form = document.querySelector(".form")
const table = document.querySelector(".table")

function toggleForm() {
    form.classList.toggle('hidden');
    table.classList.toggle('hidden');
    button.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded',()=>{
    returnButton.addEventListener('click',toggleForm)
    button.addEventListener('click',toggleForm);
})