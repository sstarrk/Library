const addBookButton = document.querySelector("#add-book-button");
const formContainer = document.querySelector(".form-container");
const submitButton = document.querySelector("#submit-button");
const closeButton = document.querySelector("#close-button");

addBookButton.addEventListener("click", () => {
    formContainer.style.display = "flex";
    formContainer.style.zIndex = "100";
});

closeButton.addEventListener("click", () => {
    formContainer.style.display = "none";
    formContainer.style.zIndex = "9";
})

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
        document.querySelector("#form-pages"),
        document.querySelector("read-toggle")
    );
    myLibrary.push(newBook);
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    addBookToLibrary();
});

