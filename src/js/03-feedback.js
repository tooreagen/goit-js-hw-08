import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";
const dataFromUser = {};

updateDataUser();

form.addEventListener("input", throttle(saveDataToStorage, 500));
form.addEventListener("submit", submitForm);

function saveDataToStorage(event) {
    dataFromUser[event.target.name] = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if (dataFromStorage.email) {
        form.email.value = dataFromStorage.email;
    } else {
        form.email.value = "";
    }
    
    if (dataFromStorage.message) {
        form.message.value = dataFromStorage.message;
    } else {
        form.message.value = "";
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(dataFromUser);
    localStorage.removeItem(KEY_STORAGE);
    event.currentTarget.reset();
}