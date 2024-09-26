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
