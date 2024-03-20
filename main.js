const myLibrary = [
    { title: "Book 1", author: "Mehmet Papila", isRead: true },
    { title: "Book 2", author: "Bora Papila", isRead: false }
];
const bookList = document.querySelector(".books");
const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".addToBooks");

function listBooks() {
    bookList.innerHTML = "";
    input.value = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const listUl = document.createElement("ul")
        const listLi = document.createElement("li")
        listLi.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;

        if (myLibrary[i].isRead) {
            listLi.textContent += ` Read`
        } else {
            listLi.textContent += ` Unread`
        }
        bookList.appendChild(listUl);
        listUl.appendChild(listLi);
    }
console.log(myLibrary)
}
listBooks();
function Book() {
};
function addBookToLibrary() {
    
    addBtn.addEventListener('click',() => {

    
        let myItem = input.value;
        myLibrary.push({ title: myItem, author:"Unknown", isRead: false});
        
        listBooks();
    })
}
addBookToLibrary();
