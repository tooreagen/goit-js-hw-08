import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";
const dataFromUser = {};

updateDataUser();

form.addEventListener("input", throttle(saveDataToStorage, 500));
form.addEventListener("submit", submitForm);

function saveDataToStorage(event) {
    // const formData = new FormData(form);
    // formData.forEach((value, name) => console.log(value, name));

    dataFromUser[event.target.name] = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    let dataFromStorage = localStorage.getItem(KEY_STORAGE);

    if (dataFromStorage) {
        dataFromStorage = JSON.parse(dataFromStorage);
        Object.entries(dataFromStorage).forEach(([name, value]) => console.log(name, value));
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(dataFromUser);
    localStorage.removeItem(KEY_STORAGE);
    event.currentTarget.reset();
}