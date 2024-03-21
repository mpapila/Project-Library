const myLibrary = [
    { title: "Book 1", author: "Mehmet Papila", isRead: true },
    { title: "Book 2", author: "Bora Papila", isRead: false }
];
const bookList = document.querySelector(".books");
const addBtn = document.querySelector(".addBtn");
const inputTitle = document.querySelector(".inputTitle");
const inputAuthor = document.querySelector(".inputAuthor")
const addBookDisplay = document.querySelector(".addbook")

function listBooks() {
    bookList.innerHTML = "";
    inputTitle.value = "";
    inputAuthor.value = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const removeBook = document.createElement("button")
        const listUl = document.createElement("ul")
        const listLi = document.createElement("li")

        listLi.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;
        if (myLibrary[i].isRead) {
            listLi.textContent += ` Read `
        } else {
            listLi.textContent += ` Unread `
        }
        removeBook.textContent = 'Remove this Book';
        removeBook.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            listBooks();
        })
        listLi.appendChild(removeBook);


        bookList.appendChild(listUl);
        listUl.appendChild(listLi);
    }
}

listBooks();
function Book() {
};
function AddBook() {
    if (addBookDisplay.style.display === "none") {
        addBookDisplay.style.display = "block";
    } else {
        addBookDisplay.style.display = "none";
    }
}
function addBookToLibrary() {

    addBtn.addEventListener('click', () => {


        let bookTitle = inputTitle.value;
        let bookAuthor = inputAuthor.value;
        myLibrary.push({ title: bookTitle, author: bookAuthor, isRead: false });

        listBooks();
    })
}
addBookToLibrary();
