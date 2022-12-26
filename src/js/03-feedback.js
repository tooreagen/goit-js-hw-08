const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    const dataFromUser = {
        email: email.value,
        message: message.value,
    }

    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
    // console.log("Object= ", dataFromUser);
    // console.log("Значение объекта с хранилища = ", localStorage.getItem(KEY_STORAGE));
}

function updateDataUser() {
    dataFromStorage = localStorage.getItem(KEY_STORAGE) || "";
    console.log(dataFromStorage);
}

updateDataUser();

form.addEventListener("input", saveDataToStorage);
console.log(15);


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