console.log(17);

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    const dataFromUser = {
        email: email.value,
        message: message.value,
    }

    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (dataFromStorage) {
        form.email.value = dataFromStorage.email;
        form.message.value = dataFromStorage.message;
        console.log(dataFromStorage);
    } else {
        form.email.value = "";
        form.message.value = "";
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
    localStorage.removeItem(KEY_STORAGE);
    form.reset();
}

updateDataUser();

form.addEventListener("input", saveDataToStorage);
form.addEventListener("submit", submitForm);





// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// 