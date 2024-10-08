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
        (document.querySelector(`[name="book_read"]`).value)
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
    let count = 0;
    books.innerHTML = "";
    array.forEach((eachBook) => {
        count = count + 1;
        const newBookDiv = document.createElement("div");
        newBookDiv.setAttribute("class", "book");
        newBookDiv.dataset.index = count;
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
        deleteButton.dataset.index = count;
        buttons.appendChild(deleteButton);
        changeButton = document.createElement("button");
        changeButton.textContent = "Status";
        changeButton.setAttribute("class", "change-status");
        buttons.appendChild(changeButton);
    })
};

const deleteBookButton = document.querySelectorAll(".delete");
const booksCount = document.querySelectorAll(".book");

deleteBookButton.forEach((eachButton) => {
    console.log(eachButton.dataset.index);
    eachButton.addEventListener("click", () => {
        booksCount.forEach((eachBook) => {
            if (eachButton.dataset.index == eachBook.dataset.index) {
                myLibrary.splice(eachBook.dataset.index - 1, 1);
            };
            displayBooks(myLibrary);
        })
    });
});