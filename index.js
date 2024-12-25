const notesContanier = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContanier.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateLocalStorage() {
localStorage.setItem('notes', notesContanier.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContanier.appendChild(inputBox).appendChild(img);
});

notesContanier.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateLocalStorage();
    } else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');   
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateLocalStorage();
            }
        });    
    }
});

document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});



