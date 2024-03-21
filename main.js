
function Book(title,author,isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
};

const bookOne = new Book('Yagmurcuk Kusu','Yasar Kemal', true);
const myLibrary = [bookOne];

function listBooks() {
    bookList.innerHTML = "";
    inputTitle.value = "";
    inputAuthor.value = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const changeStatus = document.createElement("button");
        const removeBook = document.createElement("button");
        const listUl = document.createElement("ul");
        const listLi = document.createElement("li");

        listLi.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;
        if (myLibrary[i].isRead) {
            listLi.textContent += ` Read `
        } else {
            listLi.textContent += ` Unread `
        }

        changeStatus.textContent = 'Make Read/Unread'; // button for making read/unread
        changeStatus.addEventListener('click', () => {
            myLibrary[i].changeStatus();
            listBooks();
        })
        removeBook.textContent = 'Remove this Book';
        removeBook.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            listBooks();
        })
        listLi.appendChild(changeStatus);
        listLi.appendChild(removeBook);


        bookList.appendChild(listUl);
        listUl.appendChild(listLi);
    }
}
Book.prototype.changeStatus = function() {
    this.isRead = !this.isRead;
};

const bookList = document.querySelector(".books");
const addBtn = document.querySelector(".addBtn");
const inputTitle = document.querySelector(".inputTitle");
const inputAuthor = document.querySelector(".inputAuthor")
const addBookDisplay = document.querySelector(".addbook")



listBooks();

function showAddBook() {
    if (addBookDisplay.style.display === "none") {
        addBookDisplay.style.display = "block";
    } else {
        addBookDisplay.style.display = "none";
    }
}
function addBookToLibrary(title,author,isRead) {

    addBtn.addEventListener('click', () => {

        
        let title = inputTitle.value;
        let author = inputAuthor.value;
        let isRead = document.getElementById('read').checked;
        const newBook = new Book(title,author,isRead)
        myLibrary.push(newBook);

        listBooks();
    })
}
addBookToLibrary();
