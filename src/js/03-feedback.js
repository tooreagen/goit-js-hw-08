console.log(18);

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
    const dataFromStorage = JSON.parse(localStorage.getItem(KEY_STORAGE)) || (form.email.value="ПУТИН ХУЙЛО");

    form.email.value = dataFromStorage.email;
    form.message.value = dataFromStorage.message;
    console.log(dataFromStorage);
}

updateDataUser();

form.addEventListener("input", saveDataToStorage);



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