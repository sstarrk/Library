const addBookButton = document.querySelector("#add-book");
const formContainer = document.querySelector(".form-container");
const submitButton = document.querySelector("#submit-button");
const closeButton = document.querySelector("#close-button");
const books = document.querySelector(".books");

addBookButton.addEventListener("click", () => {
    formContainer.style.display = "flex";
    formContainer.style.zIndex = "100";
});

closeButton.addEventListener("click", () => {
    formContainer.style.display = "none";
    formContainer.style.zIndex = "9";
});

const myLibrary = [];

function Book(title, author, pages, read)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {

    let newBook = new Book(
        document.querySelector("#form-book-name").value,
        document.querySelector("#form-author").value, 
        document.querySelector("#form-pages").value,
        (document.querySelector(`[name="book_read"]:checked`).value)
    );
    myLibrary.push(newBook);
};

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    addBookToLibrary();
    formContainer.style.display = "none";
    formContainer.style.zIndex = "9";
    displayBooks(myLibrary);
});

function displayBooks(array) {
    books.innerHTML = "";
    array.forEach((eachBook, index) => {
        const newBookDiv = document.createElement("div");
        newBookDiv.setAttribute("class", "book");
        newBookDiv.dataset.index = index;
        books.appendChild(newBookDiv);
        const bookName = document.createElement("p");
        bookName.textContent = eachBook.title;
        bookName.setAttribute("class", "book-name");
        newBookDiv.appendChild(bookName);
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = eachBook.author;
        bookAuthor.setAttribute("class", "book-auth");
        newBookDiv.appendChild(bookAuthor);
        const bookPages = document.createElement("p");
        bookPages.textContent = eachBook.pages;
        bookPages.setAttribute("class", "book-pages");
        newBookDiv.appendChild(bookPages);
        const bookStatus = document.createElement("p");
        bookStatus.textContent = eachBook.read;
        bookStatus.setAttribute("class", "status");
        newBookDiv.appendChild(bookStatus);
        const buttons = document.createElement("div");
        buttons.setAttribute("class", "buttons");
        newBookDiv.appendChild(buttons);
        deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("class", "delete");
        deleteButton.dataset.index = index;
        buttons.appendChild(deleteButton);
        changeButton = document.createElement("button");
        changeButton.textContent = "Status";
        changeButton.setAttribute("class", "change-status");
        buttons.appendChild(changeButton);
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
        });
        changeButton.addEventListener("click", () => {
            if (bookStatus.textContent == "Read") {
                bookStatus.textContent = "Unread";
            } else if (bookStatus.textContent == "Unread") {
                bookStatus.textContent = "Read";
            }; 
        });
    });
};